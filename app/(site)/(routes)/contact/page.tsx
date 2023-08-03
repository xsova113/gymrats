import Heading from "@/components/Heading";
import React from "react";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";

const ContactPage = () => {
  return (
    <div className="max-md:pt-32">
      <Heading
        title="Get in touch"
        description="Questions about membership or any inquiry"
        image="/images/contact.png"
      />
      <div className="flex flex-col md:flex-row gap-x-20 gap-y-10 bg-neutral-950 py-12 mt-48 px-12">
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default ContactPage;
