/*LOGIN OPEN CADASTRO E LOGIN*/
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
/*PAINEL DESLIZE */
signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});
/*BUTTON  */
signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});