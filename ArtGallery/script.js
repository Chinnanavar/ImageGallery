function show(index) {
  document.querySelector(".mimg").style.display = "block";
  document.querySelector(".text").style.display = "block";
  document.querySelector(".layer").style.display = "block";
  document.querySelector(".layer").style.zIndex = "4";
  document.querySelector(".layer").style.position = "absolute";
  document.querySelector(".layer").style.top = "0";
  document.querySelector(".layer").style.left = "0";
  document.querySelector(".layer").style.width = "100%";
  document.querySelector(".layer").style.height = "100%";
  // document.querySelectorAll(".simg").style.zIndex = "1";
  document.querySelector(".layer").style.backgroundColor =
    "rgba(0, 0, 0, 0.06)";
  document.querySelector(".layer").style.opacity = "0.8";
  document.querySelector(".layer").style.fontWeight = "400";
  document.querySelector(".mimg").src = `./images/${index}.jpg`;
}

function hide() {
  document.querySelector(".mimg").style.display = "none";
  document.querySelector(".text").style.display = "none";
  document.querySelector(".btn").style.display = "none";
}
