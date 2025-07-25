import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
export function useSignup() {
  const { isPending, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success("signup successfully");
      console.log(data);
    },
    onError: () => {
      toast.error("signup faild");
    },
  });
  return { signup, isPending };
}
