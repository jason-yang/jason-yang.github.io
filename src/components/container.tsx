import clsx from "clsx";
import React, { HTMLAttributes } from "react";

interface ContainerOptions {
  footer?: ContainerFooterProps;
}

export interface ContainerProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  options?: ContainerOptions;
}

interface ContainerFooterProps {
  border?: boolean;
}

function ContainerFooter({
  children,
  border = true,
}: React.PropsWithChildren<ContainerFooterProps>) {
  return (
    <div className={clsx("p-5 rounded-b-md", { "border-t": border })}>
      {children}
    </div>
  );
}

export default function Container({
  children,
  header,
  footer,
  options,
  className,
  ...props
}: React.PropsWithChildren<ContainerProps> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "bg-white rounded-md border border-gray-300 overflow-hidden shadow-md",
        className
      )}
      {...props}
    >
      {header && <div className="p-5 border-b">{header}</div>}
      <div className="p-5">{children}</div>
      {footer && (
        <ContainerFooter {...options?.footer}>{footer}</ContainerFooter>
      )}
    </div>
  );
}
