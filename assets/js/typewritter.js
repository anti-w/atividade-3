var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("<strong>Bem vindo(a)!! Esta é minha fã page.</strong>")
  .pauseFor(2000)
  .deleteAll()
  .typeString("<strong>Espero que goste")
  .pauseFor(5000)
  .start();
