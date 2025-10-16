import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-screen-lg px-4 mx-auto ${className ?? ""}`}>{children}</div>
  );
}


