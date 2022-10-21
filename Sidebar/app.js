const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".sidebar-toggle");

toggleBtn.addEventListener("click", function () {
	sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
	sidebar.classList.remove("show-sidebar");
});
