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
        <div className="">
            <div></div>
            <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
