"use client";

import { useEffect } from "react";
import ContactModalContent from "./ContactModalContent";

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 my-5">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3 top-3 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
        >
          ✕
        </button>

        <div className="p-4 sm:p-6">
          <ContactModalContent message={message} headingLabel={headingLabel} />
        </div>
      </div>
    </div>
  );
}
