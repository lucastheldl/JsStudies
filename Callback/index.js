const saudacao = (nome) => alert("Olá" + nome);

const processEntradaDeUsuario = (callback) => {
  const nome = prompt("Digite seu nome...");

  callback(nome);
};

processEntradaDeUsuario(saudacao);

//----------------------------

const callback = (e) => alert("HGouve um evento" + e.type);

window.addEventListener("click", callback);
