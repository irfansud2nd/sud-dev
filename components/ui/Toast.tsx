"use client";
import { useTheme } from "next-themes";
import { Toaster } from "sonner";

const Toast = () => {
  const { theme } = useTheme();
  return (
    <Toaster
      position="top-center"
      richColors
      theme={theme as "dark" | "light" | "system"}
    />
  );
};
export default Toast;
