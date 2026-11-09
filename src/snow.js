import snowImg from "../images/snow.jpg";

function apply() {
  const layout = document.querySelector(".layout");
  layout.style.backgroundImage = `url("${snowImg}")`;
}

export { apply };
