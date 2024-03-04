const sidebar = document.querySelector(".sidebar");
const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");

openIcon.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeIcon.addEventListener("click", () => {
  hideSidebar();
});

document.addEventListener("click", (e) => {
  if (e.target.tagName === "HTML") {
    hideSidebar();
  }
});

const hideSidebar = () => {
  sidebar.classList.remove("show-sidebar");
};
