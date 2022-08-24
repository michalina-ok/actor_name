const url = "actors.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    handleActorList(data);
  });

function handleActorList(data) {
  console.log(data);
  data.forEach(showActor);
}

function showActor(actor) {
  //grabbing the template
  const template = document.querySelector("#actor").content;

  //cloning it
  const copy = template.cloneNode(true);

  //changing the content
  copy.querySelector(".name").textContent = `${actor.fullname}`;
  copy.querySelector(".name").addEventListener("click", showMovie);

  function showMovie() {
    document.querySelector(".popup_wrapper").classList.toggle("show");
    document.querySelector(".popup p").textContent = actor.movie;
    document.querySelector('.popup_wrapper').addEventListener('click', hidePopup)
    function hidePopup() {
        document.querySelector('.popup_wrapper').classList.remove('show');
    }
  }

  //grabbing the parent
  const parent = document.querySelector("main");

  //appending
  parent.appendChild(copy);
}

//`${actor.movie}`
