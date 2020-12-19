import React from "react";

import iMenuOpen from "~/assets/icons/open.svg";
import iMenuClose from "~/assets/icons/close.svg";

import iMail from "~/assets/icons/mail.svg";
import iContactBox from "~/assets/icons/box.svg";

interface Icon {
  url: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

interface IconProps {
  height?: string;
  width?: string;
  className?: string;
}

const Icon = ({ url, alt, width, height, className }: Icon) => {
  return (
    <img
      src={url}
      className={className ? "icon " + className : "icon"}
      width={width ? width + "px" : "auto"}
      height={height ? height + "px" : "auto"}
      alt={alt}
    />
  );
};

export const IMenuClose = (props: IconProps) => {
  return <Icon url={iMenuClose} alt="menu_close_icon" {...props} />;
};

export const IMenuOpen = (props: IconProps) => {
  return <Icon url={iMenuOpen} alt="menu_open_icon" {...props} />;
};

export const IMail = (props: IconProps) => {
  return <Icon url={iMail} alt="mail_icon" {...props} />;
};

export const IBox = (props: IconProps) => {
  return <Icon url={iContactBox} alt="contact_me_icon" {...props} />;
};
