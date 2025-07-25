// EditStoryModal.jsx
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const EditStoryModal = ({ story, onClose, refetch }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: story?.title,
      description: story?.description,
    },
  });

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.put(`/stories/${story._id}`, data);
      if (res.data?.modifiedCount > 0) {
        Swal.fire("Updated!", "Your story has been updated.", "success");
        refetch();
        onClose();
      }
    } catch {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <dialog id="edit_modal" className="modal modal-bottom sm:modal-middle" open>
      <div className="modal-box bg-base-200">
        <h3 className="font-bold text-lg">Edit Story</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <input
            {...register("title", { required: true })}
            className="input input-bordered w-full"
            placeholder="Title"
          />
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            rows={4}
          />
          <div className="modal-action">
            <button type="submit" className="btn btn-success btn-sm">
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost btn-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditStoryModal;
