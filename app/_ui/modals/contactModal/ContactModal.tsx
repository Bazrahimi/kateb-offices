"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 p-4">
      <div className="flex min-h-full items-start justify-center py-6 sm:items-center">
        <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

        <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white shadow-xl">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-3 top-3 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
          >
            ✕
          </button>

          <div className="p-4 sm:p-6">
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