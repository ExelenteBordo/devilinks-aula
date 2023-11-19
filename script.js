function toogleMode() {
  const CONTEÚDO = document.body;
  CONTEÚDO.classList.toggle("light")

  let avatar = CONTEÚDO.querySelector("div#main header img")

  if(CONTEÚDO.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avatar-light.png")
  } else {
    avatar.setAttribute("src", "./assets/avatar.png")
  }
}