import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("cabin successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
