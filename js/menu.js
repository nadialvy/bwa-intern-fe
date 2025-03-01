document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  function openSidebar() {
    sidebar.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  }

  function closeSidebar() {
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  }

  menuButton.addEventListener("click", openSidebar);

  closeButton.addEventListener("click", closeSidebar);

  overlay.addEventListener("click", closeSidebar);
});
