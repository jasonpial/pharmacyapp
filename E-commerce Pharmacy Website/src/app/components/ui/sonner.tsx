import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = (props: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "bg-popover text-popover-foreground border border-border shadow-lg",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
