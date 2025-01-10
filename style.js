function show() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  document.querySelector("button").style.backgroundColor = "white";
  document.querySelector("button").style.color = "black";
  document.querySelector("button").innerHTML = "Light";
  localStorage.setItem("dark", "black");
  // setTimeout(() => {
  //   document.querySelector("body").style.backgroundColor = "white";
  // }, 5000);
}

const storage = localStorage.getItem("dark");

document.querySelector("body").style.backgroundColor = storage
  ? "black"
  : "white";
