import cloudImg from "../images/cloudy.jpg";

function apply() {
  const layout = document.querySelector(".layout");
  layout.style.backgroundImage = `url("${cloudImg}")`;
}

export { apply };
