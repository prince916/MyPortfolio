import React from "react";
import Title from "../layouts/Title";
import { ContactMe } from "../../assets/index";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-[500px] flex justify-between">
          <div
            className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] 
            flex flex-col gap-8 p-6 lgl:p-8 rounded-lg shadow-shadowOne"
          >
            <img
              className="w-full h-64 object-cover rounded-lg mb-2"
              src={ContactMe}
              alt="ContactMe"
            />
          </div>
          <div className="w-[60%] h-full flex flex-col justify-between rounded-lg bg-blue-200">
            <form>
              <label>
                Enter your name:
                <input type="text" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
