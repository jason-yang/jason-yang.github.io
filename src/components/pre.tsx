import clsx from "clsx";

export default function Pre({
  children,
  className,
  ...props
}: React.ClassAttributes<HTMLPreElement> &
  React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre className={clsx(className, "mb-4")} {...props}>
      {children}
    </pre>
  );
}
