// Função para realizar o login
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const aviso = document.getElementById("aviso");

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Redireciona para a página principal
        window.location.replace("menuprincipal.html");
        aviso.innerText = "Login bem Sucedido!!!";
    })
    .catch((error) => {
        // Verifica se o erro é devido a uma senha incorreta
        if (error.code === "auth/wrong-password") {
            // Exibe mensagem de senha incorreta
            aviso.innerText = "Senha incorreta. Por favor, tente novamente.";
        } else {
            // Exibe mensagem de erro genérica para outros tipos de erro
            aviso.innerText = "Email não cadastrado!!!";
            console.error(error.message);
        }
    });
}
