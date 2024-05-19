
// Função para obter e exibir as informações do usuário
function getUserInfo() {
    // Verifica se o usuário está autenticado
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            // Se o usuário não estiver autenticado, redireciona para o index.html
            window.location.href = "index.html";
        } else {
            // Se o usuário estiver autenticado, recupera seu nome e exibe
            firebase.firestore().collection("usuarios").doc(user.uid).get()
            .then(function(doc) {
                if (doc.exists) {
                    const userData = doc.data();
                    const userName = userData.name;
                    document.getElementById("nome-usuario").innerText = "Olá, " + userName;
                } else {
                    console.log("Usuário não encontrado");
                }
            })
            .catch(function(error) {
                console.log("Erro ao recuperar o nome do usuário:", error);
            });
        }
    });
}

// Chama a função para obter e exibir as informações do usuário
getUserInfo();
