function previewPhoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById("photoPreview").src = e.target.result;
      document.querySelector("label[for='photo']").classList.add("hidden");
      document.getElementById("photoPreview").classList.remove("hidden");
      document.getElementById("deletePhoto").classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  }
}

function removePhoto() {
  document.getElementById("photo").value = ""; // Reset input file
  document.getElementById("photoPreview").classList.add("hidden");
  document.getElementById("deletePhoto").classList.add("hidden");
  document.querySelector("label[for='photo']").classList.remove("hidden");
}

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const photo = document.getElementById("photo").value.trim();
  const name = document.getElementById("name").value.trim();
  const occupation = document.getElementById("occupation").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmpass = document.getElementById("confirmpass").value.trim();

  if (!photo || !name || !occupation || !email || !password || !confirmpass) {
    alert("Semua field harus diisi!");
    return;
  }

  if (password !== confirmpass) {
    alert("Password dan Confirm Password tidak cocok!");
    return;
  }

  console.log("Photo:", photo);
  console.log("Name:", name);
  console.log("Occupation:", occupation);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmpass);

  alert("Form berhasil dikirim!");
});