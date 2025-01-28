import ReactLenis from "lenis/react";
import { ReactNode } from "react";

interface LenisProps {
  children: ReactNode;
}

export const Lenis = ({ children }: LenisProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 2 }}>
      {children}
    </ReactLenis>
  );
};
