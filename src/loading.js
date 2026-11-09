const search = document.querySelector(".search-bar");
const loadingDiv = document.createElement("p");

function loading() {
  loadingDiv.textContent = "LOADING..";
  search.append(loadingDiv);
}
function hideLoading() {
  loadingDiv.textContent = "";
  search.removeChild(loadingDiv);
}
export { loading, hideLoading };
