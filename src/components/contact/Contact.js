import React, { useState } from "react";
import { useRef } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";

const normalizeEnvValue = (value) =>
  String(value || "")
    .trim()
    .replace(/^["']|["']$/g, "");

const Contact = () => {
  const form = useRef();
  const LAST_SUBMIT_STORAGE_KEY = "portfolio.contact.lastSubmittedAt";

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedAt, setLastSubmittedAt] = useState(() => {
    const savedTs = Number(localStorage.getItem(LAST_SUBMIT_STORAGE_KEY));
    return Number.isFinite(savedTs) ? savedTs : 0;
  });

  const SUBMIT_COOLDOWN_MS = 30000;

  const SERVICE_ID = normalizeEnvValue(process.env.REACT_APP_EMAILJS_SERVICE_ID);
  const TEMPLATE_ID = normalizeEnvValue(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
  const PUBLIC_KEY = normalizeEnvValue(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

  // ========== Email Validation start here ==============
  const emailValidation = (value) => {
    return String(value)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here =================

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = username.trim();
    const trimmedPhone = phoneNumber.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    const trimmedWebsite = website.trim();
    const now = Date.now();
    // Honeypot trap: bots usually fill hidden fields.
    if (trimmedWebsite !== "") {
      setErrMsg("Submission blocked.");
      return;
    }

    const elapsed = now - lastSubmittedAt;
    if (elapsed < SUBMIT_COOLDOWN_MS) {
      const waitSeconds = Math.ceil((SUBMIT_COOLDOWN_MS - elapsed) / 1000);
      setErrMsg(`Please wait ${waitSeconds}s before sending another message.`);
      return;
    }


    setErrMsg("");
    setSuccessMsg("");

    if (trimmedName === "") {
      setErrMsg("Username is required!");
      return;
    }

    if (trimmedPhone === "") {
      setErrMsg("Phone number is required!");
      return;
    }

    if (trimmedEmail === "") {
      setErrMsg("Please give your Email!");
      return;
    }

    if (!emailValidation(trimmedEmail)) {
      setErrMsg("Give a valid Email!");
      return;
    }

    if (trimmedSubject === "") {
      setErrMsg("Plese give your Subject!");
      return;
    }

    if (trimmedMessage === "") {
      setErrMsg("Message is required!");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrMsg("Email service is not configured. Add EmailJS env variables.");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);

      setSuccessMsg(
        `Thank you dear ${trimmedName}, your message has been sent successfully!`
      );
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      setWebsite("");
      setLastSubmittedAt(now);
      localStorage.setItem(LAST_SUBMIT_STORAGE_KEY, String(now));
      e.target.reset();
    } catch (error) {
      const statusCode = error?.status || "unknown";
      const errorText = error?.text || "No error text returned by EmailJS.";
      const errorTextLower = String(errorText).toLowerCase();

      console.error("EmailJS send failed", {
        status: statusCode,
        text: errorText,
        origin: window.location.origin,
        serviceIdConfigured: Boolean(SERVICE_ID),
        templateIdConfigured: Boolean(TEMPLATE_ID),
        publicKeyConfigured: Boolean(PUBLIC_KEY),
      });

      if (
        errorTextLower.includes("invalid grant") ||
        errorTextLower.includes("reconnect your gmail account")
      ) {
        setErrMsg(
          "Email service authorization expired. Reconnect your Gmail account in EmailJS > Email Services, then try again."
        );
      } else if (error?.status === 412) {
        setErrMsg(
          `EmailJS rejected this request (412) from ${window.location.origin}. Add this exact origin in EmailJS Account > Security > Domains. Details: ${errorText}`
        );
      } else {
        setErrMsg(
          `Unable to send right now. EmailJS status: ${statusCode}. Details: ${errorText}`
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div
            className="w-full lgl:w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] 
            flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne"
          >
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              ref={form}
              onSubmit={handleSubmit}
            >
              {errMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                  shadow-shadowOne text-center text-orange-500 
                  text-base tracking-wide animate-bounce"
                >
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] 
                shadow-shadowOne text-center text-green-500 
                text-base tracking-wide animate-bounce"
                >
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 tracking-wide uppercase">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    name="user_name"
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } "w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] 
                    text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
                    focus-visible:border-b-transparent duration-300"`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 tracking-wide uppercase">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    name="user_phone"
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } "w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] 
                    text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
                    focus-visible:border-b-transparent duration-300"`}
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-400 tracking-wide uppercase">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="user_email"
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } "w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] 
                  text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
                  focus-visible:border-b-transparent duration-300"`}
                  type="email"
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm text-gray-400 tracking-wide uppercase">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  name="subject"
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } "w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] 
                  text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
                  focus-visible:border-b-transparent duration-300"`}
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm text-gray-400 tracking-wide uppercase">
                  Your message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } "w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] 
                  text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none 
                  focus-visible:border-b-transparent duration-300 resize-none"`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase 
                hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
