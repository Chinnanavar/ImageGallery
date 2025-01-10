function show() {
  if (document.querySelector("body").style.backgroundColor === "black") {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector("button").style.backgroundColor = "black";
    document.querySelector("button").style.color = "white";
    document.querySelector("button").innerHTML = "Dark";
    localStorage.setItem("dark", "white");
  } else {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    document.querySelector("button").style.backgroundColor = "white";
    document.querySelector("button").style.color = "black";
    document.querySelector("button").innerHTML = "Light";
    localStorage.setItem("dark", "black");
  }
}

const storage = localStorage.getItem("dark");

document.querySelector("body").style.backgroundColor = storage
  ? "black"
  : "white";

document.querySelector("body").style.color = storage ? "white" : "black";

document.querySelector("button").style.backgroundColor = storage
  ? "white"
  : "black";

document.querySelector("button").style.color = storage ? "black" : "white";

document.querySelector("button").innerHTML = storage ? "Light" : "Dark";

function reset() {
  localStorage.removeItem("dark");
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  document.querySelector("button").style.backgroundColor = "black";
  document.querySelector("button").style.color = "white";
  document.querySelector("button").innerHTML = "Dark";
}
