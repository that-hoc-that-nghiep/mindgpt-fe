import toast from "react-hot-toast";

export const NotificationToast = {
  success: (message?: string, options?: any) => {
    const { ...restOptions } = options ?? {};
    toast.success(message || "Success !", {
      ...restOptions,
    });
  },
  error: (message?: string, options?: any) => {
    const { ...restOptions } = options ?? {};
    toast.error(message || "Error !", {
      ...restOptions,
    });
  },
};
