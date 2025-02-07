document.getElementById("registro").addEventListener("click",
  function(){

  const email = document.querySelector("#email")
  const senha = document.querySelector("#password")
  const nome = document.querySelector("#nome")
  const nick = document.querySelector("#nick")
  const eemail = document.querySelector("#eemail")
  const esenha = document.querySelector("#esenha")
  const enome = document.querySelector("#enome")
  const enick = document.querySelector("#enick")
  


  //Extrair valor digitado pelo usuario no campo de input

  const emailValue = email.value;
  const senhaValue = email.value;
  const nomeValue = email.value;
  const nickValue = email.value;

  if (emailValue === "") {
    email.classList.add("erro");
    eemail.textContent = "O campo email é obrigatorio"
  }else{
 eemail.textContent = ""
email.classList.remove("erro");
  }

  if (senhaValue === "") {
    senha.classList.add("erro");
    esenha.textContent = "Este campo é obrigatorio"
  }else{
      esenha.textContent = ""
      senha.classList.remove("erro");
  }

  if (nomeValue === "") {
    nome.classList.add("erro");
    enome.textContent = "Este campo é obrigatorio"
  }else{
    enome.textContent = ""
    nome.classList.remove("erro");
  }

  if (nickValue === "") {
    nick.classList.add("erro");
    enick.textContent = "Este campo é obrigatorio"
  }else{
    enick.textContent = ""
    nick.classList.remove("erro");
  }
})
