import { AnchorHTMLAttributes, ReactElement } from "react";
import Image from "next/image";

interface IAnchorButton extends AnchorHTMLAttributes<any> {
  label?: string;
  iconSrc?: string;
}

export const AnchorButton = ({ label, iconSrc, ...rest }: IAnchorButton) => {
  return (
    <a
      {...rest}
      className="cursor-pointer appearance-none rounded-full drop-shadow-lg bg-primary flex justify-center items-center h-10 min-w-[2.5rem] text-white tracking-wider hover:bg-hover transition-colors duration-300 max-w-xs w-full md:w-auto"
    >
      {iconSrc && <Image width={28} height={28} src={iconSrc} alt="" />}
      {label && <p className="px-5">{label}</p>}
    </a>
  );
};
