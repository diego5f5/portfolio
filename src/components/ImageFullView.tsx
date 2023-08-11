"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import FocusLock from "react-focus-lock";
import Image from "next/image";
import { Button } from "./Button";

const effect = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 40,
    },
  },
  exit: {
    scale: 0,
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

const ImageFullViewContent = ({
  className,
  children,
  ariaLabel,
  handleClose,
}: ImageFullViewContentProps) => (
  <motion.div
    tabIndex={-1}
    role="dialog"
    aria-modal={true}
    aria-label={ariaLabel}
    className={`relative md:h-[80vh] h-[90vh] md:w-[80vw] w-[90vw] ${
      className || "p-5 bg-gray-100 rounded-lg shadow-lg focus:outline-none"
    }`}
    variants={effect}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={(event) => event.stopPropagation()}
  >
    {children}
    <div className="absolute top-4 right-4 md:scale-100 scale-75">
      <Button onClick={handleClose} iconSrc="/icons/close.svg" title="Close" />
    </div>
  </motion.div>
);

export const ImageFullView = ({
  isOpen,
  className,
  ariaLabel,
  imageSrc,
  handleClose,
}: ImageFullViewProps) => {
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
            <ImageFullViewContent
              className={className}
              ariaLabel={ariaLabel}
              handleClose={handleClose}
            >
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src={imageSrc}
                alt="expanded image"
                className="w-full h-full object-contain"
              />
            </ImageFullViewContent>
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

type ImageFullViewContentProps = HTMLAttributes<HTMLDivElement> & {
  ariaLabel?: string;
  handleClose: () => void;
};

type ImageFullViewProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  handleClose: () => void;
  ariaLabel?: string;
  imageSrc: string;
};
