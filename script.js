const lampSwitch = document.querySelector("#lamp-switch");
const lamp = document.querySelector("#lamp");

lampSwitch.addEventListener("click", function () {
  if (lamp.src.match("off")) {
    lamp.src = "./images/lamp-on.gif";
    lampSwitch.innerHTML = "Turn off";
  } else {
    lamp.src = "./images/lamp-off.gif";
    lampSwitch.innerHTML = "Turn on";
  }
});
