let list = document.querySelectorAll(".list");
let searchInput = document.querySelector("#searchInput");

function handleSearch() {
  for (let i = 0; i < list.length; i++) {
    let names = list[i].textContent;
    if (!names.includes(searchInput.value)) {
      list[i].style.display = "none";
    } else if (searchInput.value === "") {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "block";
    }
  }
}
