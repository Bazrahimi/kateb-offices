"use client";
import { CTA } from "@/app/_lib/content/cta";
import { useState } from "react";
import Button from "../button/Button";
import ContactModal from "../modals/contactModal/ContactModal";

const FreeTourButton = () => {
  const [open, setOpen] = useState(false);
  const buttonContent = `Book ${CTA.freeTour.label} Now`

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        {buttonContent}
      </Button>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        message={CTA.freeTour.message}
  
        headingLabel={buttonContent}
      />
    </>
  );
};

export default FreeTourButton;
