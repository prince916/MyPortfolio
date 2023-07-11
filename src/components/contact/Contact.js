import React from "react";
import Title from "../layouts/Title";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="CONTACT"
          des="Contact With Me"
        />
      </div>
      <div className="w-full">
        <div className="w-full h-[500px] flex flex-col justify-between">
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">

            </div>
            <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
