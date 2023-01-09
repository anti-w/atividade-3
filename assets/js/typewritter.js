var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("<strong>Bem vindo(a)! Este é o Diretor Nezu.</strong>")
  .pauseFor(5000)
  .start();
