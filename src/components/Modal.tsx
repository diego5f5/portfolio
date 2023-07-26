"use client";

import { HTMLAttributes, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import FocusLock from "react-focus-lock";

const effect = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 40,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Backdrop = ({ children, handleClose }: BackdropProps) => (
  <motion.div
    className="
      z-50 fixed inset-0
      flex items-center justify-center
      bg-backdrop backdrop-filter backdrop-brightness-50
    "
    onClick={handleClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

const ModalContent = ({
  className,
  children,
  ariaLabel,
}: ModalContentProps) => (
  <motion.div
    tabIndex={-1}
    role="dialog"
    aria-modal={true}
    aria-label={ariaLabel}
    className={`relative ${
      className ||
      "p-5 bg-white rounded-lg shadow-lg focus:outline-none min-w-[500px] min-h-[300px]"
    }`}
    variants={effect}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={(event) => event.stopPropagation()}
  >
    {children}
  </motion.div>
);

export const Modal = ({
  isOpen,
  children,
  className,
  ariaLabel,
  handleClose,
}: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isOpen || event.key !== "Escape") return;

    handleClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return <></>;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <Backdrop handleClose={handleClose}>
          <FocusLock>
            <ModalContent className={className} ariaLabel={ariaLabel}>
              {children}
            </ModalContent>
          </FocusLock>
        </Backdrop>
      ) : null}
    </AnimatePresence>,
    document.getElementById("modal-portal")!
  );
};

type BackdropProps = HTMLAttributes<HTMLDivElement> & {
  handleClose?: () => void;
};

type ModalContentProps = HTMLAttributes<HTMLDivElement> & {
  ariaLabel?: string;
};

type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  handleClose: () => void;
  ariaLabel?: string;
};
