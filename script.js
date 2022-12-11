let icon = document.querySelector(".icon");
let close = document.querySelector(".close");
icon.addEventListener("click", (e) => {
  let mb = document.querySelector(".mb");
  mb.classList.add("trans");

  //   mb.style.display = "none";
});
close.addEventListener("click", (e) => {
  document.querySelector(".mb").classList.remove("trans");
  console.log("aaaaasd");
  console.log(e);
});
