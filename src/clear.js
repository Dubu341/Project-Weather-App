import clearImg from "../images/Clear.jpg";

function apply() {
  const layout = document.querySelector(".layout");
  layout.style.backgroundImage = `url("${clearImg}")`;
}

export { apply };
