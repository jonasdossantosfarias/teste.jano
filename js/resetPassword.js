// Arquivo: resetPassword.js

// Função para redefinir a senha
function resetPassword() {
    var emailAddress = document.getElementById('email').value;
  
    firebase.auth().sendPasswordResetEmail(emailAddress)
      .then(function() {
        // Email de redefinição de senha enviado com sucesso
        alert("Um email de redefinição de senha foi enviado para " + emailAddress);
        // Redirecionar para index.html após pressionar "OK"
        window.location.href = "index.html";
      })
      .catch(function(error) {
        // Ocorreu um erro ao enviar o email de redefinição de senha
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage);
        alert("Erro ao enviar o email de redefinição de senha: " + errorMessage);
      });
}
