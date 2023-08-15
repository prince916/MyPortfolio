import React from "react";
import Title from "../layouts/Title";

const Map = () => {
  return (
    <section
      id="map"
      className="w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-full flex flex-col gap-8">
        <div className="flex justify-center items-center text-center">
          <Title title="Address" des="My Location in google map" />
        </div>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.2248700690108!2d88.34186481599399!3d22.594136801142948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e98e0de52f%3A0x160bc3c2e7498b6d!2sGagananchal%20Appartments!5e0!3m2!1sen!2sin!4v1689365143711!5m2!1sen!2sin" 
        width="100%" 
        height="400" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
    </section>
  );
};

export default Map;
