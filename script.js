let open = document.getElementById("open");
let close = document.getElementById("close");
let modal_container = document.getElementById("modal_container");

open.onclick = function () {
  modal_container.classList.add("show");
};
close.onclick = function () {
  modal_container.classList.remove("show");
};
