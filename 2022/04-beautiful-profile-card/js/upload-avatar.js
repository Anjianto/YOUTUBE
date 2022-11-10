const avatarWrapper = document.getElementById("avatar-wrapper");
const avatar = document.getElementById("avatar");
const inputAvatar = document.getElementById("input-avatar");

avatarWrapper.onclick = () => inputAvatar.click();

inputAvatar.onchange = (event) => {
  const reader = new FileReader();
  // prevent error when user cancel selected image
  if (event.target.files.length < 1) return;
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = () => {
    avatar.src = reader.result;
  };
  reader.onerror = (error) => {
    console.error(error);
  };
};
