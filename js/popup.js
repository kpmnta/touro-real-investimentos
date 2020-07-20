function onMouseOut(event) {
  // quando o mouse esta perto das abas trigger a pop up

  if (
    event.clientY < 50 &&
    event.relatedTarget == null &&
    event.target.nodeName.toLowerCase() !== 'select') {

    document.removeEventListener("mouseout", onMouseOut);

    // popup aparece
    document.getElementById("pop-up").style.display = "block";
  }
}

document.addEventListener("mouseout", onMouseOut);

function closePopup(event) {
  const el = document.getElementById("pop-up");
  el.style.display = 'none';
}

