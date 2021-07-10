function open() {
  document.querySelector("nav").style.display = "block";
}

document.querySelector(".navimg").addEventListener("click", open);

function close() {
    document.querySelector(".nav").style.display = "none";
}

document.querySelector(".navclose").addEventListener("click", close);

document.querySelector("ul").addEventListener("click", close)