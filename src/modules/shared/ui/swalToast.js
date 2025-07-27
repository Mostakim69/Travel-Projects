import Swal from "sweetalert2";

export const swalSuccessToast = ({
  title = "Success!",
  text = "Successfully done!",
  toast = true,
  timer = 2000,
  background = "#0f172a",
  color = "#fff",
  showConfirmButton = false,
  icon = "success",
} = {}) => {
  Swal.fire({
    icon,
    title,
    text,
    toast,
    timer,
    background,
    color,
    showConfirmButton,
  });
};
