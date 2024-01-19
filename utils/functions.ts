import { Id, toast } from "react-toastify";

export const countMonth = () => {
  const start = new Date("2023-03-01");
  const current = new Date();
  const monthsPassed =
    (current.getFullYear() - start.getFullYear()) * 12 +
    (current.getMonth() - start.getMonth());
  return monthsPassed;
};

export const controlToast = (
  message: string,
  ref: React.MutableRefObject<Id | null>,
  type: "loading" | "success" | "error",
  newToast: boolean = false
) => {
  if (newToast) {
    if (type == "loading") {
      ref.current = toast.loading(message, {
        position: "top-center",
        theme: "colored",
      });
    } else {
      ref.current = toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        closeButton: true,
        theme: "colored",
      });
    }
  } else {
    if (ref.current) {
      if (type === "loading") {
        toast.update(ref.current, {
          render: message,
        });
      } else {
        toast.update(ref.current, {
          render: message,
          type: type,
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
        });
      }
    }
  }
};
