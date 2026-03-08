"use client";
import { CTA } from "@/app/_lib/content/cta";
import { useState } from "react";
import Button from "../button/Button";
import ContactModal from "../modals/contactModal/ContactModal";

const FreeTourButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Book {CTA.freeTour.label}
      </Button>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        message={CTA.freeTour.message}
  
        headingLabel="Book a Tour Now"
      />
    </>
  );
};

export default FreeTourButton;
