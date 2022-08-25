const imagem = document.querySelector('img')
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const btnEntrar = document.querySelector("button[type='submit']");
const spanMsgEmail = document.querySelector("#msg-email");

imagem.addEventListener("click", function(){
    if(imagem.src.includes("login2")){
        imagem.src = "./assets/images/login3.png"
        
    }else if(imagem.src.includes("login3")){
        imagem.src = "./assets/images/login1.png"
    } else if(imagem.src.includes("login1")){
        imagem.src = "./assets/images/login2.png"
    }        
})

inputEmail.addEventListener("keyup", function () {
    if (inputEmail.value == "") {
      spanMsgEmail.innerText = "Digite um e-mail válido.";
    } else {
      spanMsgEmail.innerText = "";
    }
  });
  
  inputPassword.addEventListener("keyup", function () {
    const msgSpan = document.querySelector("#msgPassword");
    if (inputPassword.value.length < 8) {
      const span = document.createElement("span");
      const message = document.createTextNode(
        "Digite uma senha válida."
      );
      span.appendChild(message);
      span.setAttribute("id", "msgPassword");
  
      if (!msgSpan) {
        inputPassword.insertAdjacentElement("afterend", span);
      } else {
        msgSpan.innerText = "Digite uma senha válida.";
      }
    } else {
      msgSpan.innerText = "";
    }
  });
  
  btnEntrar.addEventListener("click", function (event) {
    event.preventDefault();
    const spanMsgPass = document.querySelector("#msgPassword");
  
    if(spanMsgPass.childNodes.length != 0 || spanMsgEmail.childNodes.length != 0){
        alert("Preencha todos os campos corretamente!")
    } else {
      alert("Seja bem vindo!")
    }
  });