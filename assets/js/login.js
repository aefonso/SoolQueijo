let signInButton = document.querySelector('singIn')
/*LOGIN OPEN CADASTRO E LOGIN*/
const signUpButton = document.getElementById("signUp");

const container = document.getElementById("container");
/*PAINEL DESLIZE */
signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});
/*BUTTON  */

signInButton.addEventListener("click", () => {
   let inputSenha = document.querySelector('#senha')

   if(inputSenha.getAttribute('type') == 'password'){
       inputSenha.setAttribute('type', 'text')
   }else {
       inputSenha.setAttribute('type', 'password')
   }
});

function entrar(){
    alert('Teste funcionando')
}