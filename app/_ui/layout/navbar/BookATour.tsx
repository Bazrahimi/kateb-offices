"use client";
import { useState } from "react";
import Button from "../../button/Button";
import ContactModal from "../../modals/contactModal/ContactModal";

const BookATour = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button size="xs" variant="outline" onClick={() => setOpen(true)}>Book a Tour</Button>
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        ctaKey="freeTour"
        serviceLabel="services and shared amenities"
      />
    </>
  );
};

export default BookATour;
