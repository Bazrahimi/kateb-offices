"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ContactModalContent from "./ContactModalContent";
import Button from "../../button/Button";

type Props = {
  open: boolean;
  onClose: () => void;
  message: string;
  headingLabel: string;
};

export default function ContactModal({
  open,
  onClose,
  message,
  headingLabel,
}: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[500] overflow-y-auto bg-org-primary-main/60 p-4">
      <div className="flex min-h-full items-start justify-center py-6 sm:items-center ">
        <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

        <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-xl">
          <Button
            variant="danger"
            onClick={onClose}
            aria-label="Close modal"
            fullWidth

          >
            Close
          </Button>

          <div className=" bg-org-primary-dark">
            <ContactModalContent
              message={message}
              headingLabel={headingLabel}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}