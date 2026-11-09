import rainImg from "../images/jorgen-hendriksen-i6dZEEN05DY-unsplash.jpg";

function apply() {
  const layout = document.querySelector(".layout");
  layout.style.backgroundImage = `url("${rainImg}")`;
}

export { apply };
