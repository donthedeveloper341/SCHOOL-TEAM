// INTRO

window.addEventListener("load", () => {

  setTimeout(() => {

    document
    .getElementById("intro")
    .classList.add("hide");

  }, 3500);

});

// PLAYER SEARCH

const search =
document.getElementById("search");

search.addEventListener("keyup", () => {

  let value =
  search.value.toLowerCase();

  let players =
  document.querySelectorAll(".player-search");

  players.forEach(player => {

    let text =
    player.innerText.toLowerCase();

    if(text.includes(value)){

      player.style.display = "block";

    } else {

      player.style.display = "none";

    }

  });

});