function toggle() {
  let bulb = document.getElementById("bulb");
  if (bulb.src.includes("off")) {
    bulb.src = "images/light_on.png";
  } else {
    bulb.src = "images/light_off.png";
  }
}
