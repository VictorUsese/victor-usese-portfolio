import { toast as sonnerToast } from "sonner";

export function useToast() {
  return {
    toast: ({ title, description }) => {
      sonnerToast(title, {
        description,
      });
    },
  };
}
