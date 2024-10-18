import React from "react";
import Image from "next/image";

export function Logo() {
  return <Image src={`/assets/logo.svg`} alt="logo" width="127" height="116" />;
}

export default function Navbar() {
  return (
    <div>
      <Logo />
    </div>
  );
}
