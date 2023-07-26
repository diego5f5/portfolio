import { ButtonHTMLAttributes } from "react";
import Image from "next/image";

interface IButton extends ButtonHTMLAttributes<any> {
  label?: string;
  iconSrc?: string;
}

export const Button = ({ label, iconSrc, ...rest }: IButton) => {
  return (
    <button
      type="button"
      className="cursor-pointer appearance-none rounded-full drop-shadow-lg bg-primary flex justify-center items-center h-10 min-w-[2.5rem] text-white tracking-wider hover:bg-hover transition-colors duration-300 max-w-xs w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary"
      {...rest}
    >
      {iconSrc && <Image width={28} height={28} src={iconSrc} alt="" />}
      {label && <p className="px-5">{label}</p>}
    </button>
  );
};
