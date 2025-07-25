import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isLogin, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Login successfully");
      // console.log(user);

      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {

      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { isLogin, login };
}
