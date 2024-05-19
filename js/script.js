var monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var d = new Date();
document.getElementById("date").innerHTML = "Referente ao Mês de " + monthNames[d.getMonth()];

firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        window.location.href = "index.html";
    } else {
        firebase.firestore().collection("usuarios").doc(user.uid).get()
        .then(function(doc) {
            if (doc.exists) {
                const userData = doc.data();
                const userName = userData.name;
                document.getElementById("nome-usuario").innerText = userName;

            } else {
                console.log("Usuário não encontrado!");
            }
        })
        .catch(function(error) {
            console.log("Erro ao recuperar o nome do usuário:", error);
        });
    }
    
});

// Recuperar os valores do localStorage
const percentualAlertaFisico = localStorage.getItem('physicalPhaseValue');
const percentualAlertaPsicologico = localStorage.getItem('psychologicalPhaseValue');
const resStressf = localStorage.getItem('psychologicalResultValue');
const percentualAlertaFisico2 = localStorage.getItem('physicalPhaseValue2');
const percentualAlertaPsicologico2 = localStorage.getItem('psychologicalPhaseValue2');
const resStressf2 = localStorage.getItem('psychologicalResultValue2');
const percentualAlertaFisico3 = localStorage.getItem('physicalPhaseValue3');
const percentualAlertaPsicologico3 = localStorage.getItem('psychologicalPhaseValue3');
const resStressf3 = localStorage.getItem('psychologicalResultValue3');

let circulo = document.querySelector(".circulo");
let circulo1 = document.querySelector(".circulo1");
let circulo2 = document.querySelector(".circulo2");
let circulo3 = document.querySelector(".circulo3");
let circulo4 = document.querySelector(".circulo4");
let circulo5 = document.querySelector(".circulo5");
let circulo6 = document.querySelector(".circulo6");
let valor = document.querySelector(".valor");
let valor1 = document.querySelector(".valor1");
let valor2 = document.querySelector(".valor2");
let valor3 = document.querySelector(".valor3");
let valor4 = document.querySelector(".valor4");
let valor5 = document.querySelector(".valor5");
let valor6 = document.querySelector(".valor6");

let valorInicial = 0;
let valorfinal = parseInt(resStressf);
let valorfinal1 = parseInt(percentualAlertaFisico);
let valorfinal2 = parseInt(percentualAlertaPsicologico);
let valorfinal3 = parseInt(percentualAlertaFisico2);
let valorfinal4 = parseInt(percentualAlertaPsicologico2);
let valorfinal5 = parseInt(percentualAlertaFisico3);
let valorfinal6 = parseInt(percentualAlertaPsicologico3);

let progresso = setInterval(() => {
    valorInicial++;
    valor.textContent = `${valorInicial}%`;
    circulo.style.background = `conic-gradient(#3531f2 ${valorInicial * 3.6}deg, #e5e7eb 0deg)`;

    if (valorInicial === valorfinal) {
        clearInterval(progresso);
    }
   
}, 50);

let progresso1 = setInterval(() => {
    valorInicial++;
    valor1.textContent = `${valorInicial}%`;
    circulo1.style.background = `conic-gradient(#3531f2 ${valorInicial * 3.6}deg, #e5e7eb 0deg)`;

    if (valorInicial === valorfinal1) {
        clearInterval(progresso1);
    }
   
}, 50);

let progresso2 = setInterval(() => {
    valorInicial++;
    valor2.textContent = `${valorInicial}%`;
    circulo2.style.background = `conic-gradient(#3531f2 ${valorInicial * 3.6}deg, #e5e7eb 0deg)`;

    if (valorInicial === valorfinal2) {
        clearInterval(progresso2);
    }
   
}, 50);

let progresso3 = setInterval(() => {
    valorInicial++;
    valor3.textContent = `${valorInicial}%`;
    circulo3.style.background = `conic-gradient(#3531f2 ${valorInicial * 3.6}deg, #e5e7eb 0deg)`;

    if (valorInicial === valorfinal3) {
        clearInterval(progresso3);
    }
   
}, 50);

let progresso4 = setInterval(() => {
    valorInicial++;
    valor4.textContent = `${valorInicial}%`;
    circulo4.style.background = `conic-gradient(#3531f2 ${valorInicial * 3.6}deg, #e5e7eb 0deg)`;

    if (valorInicial === valorfinal4) {
        clearInterval(progresso4);
    }
   
}, 50);

let progresso5 = setInterval(() => {
    valorInicial++;
    valor5.textContent = `${valorInicial}%`;
    circulo5.style.background = `conic-gradient(#3531f2 ${valorInicial * 3.6}deg, #e5e7eb 0deg)`;

    if (valorInicial === valorfinal5) {
        clearInterval(progresso5);
    }
   
}, 50);

let progresso6 = setInterval(() => {
    valorInicial++;
    valor6.textContent = `${valorInicial}%`;
    circulo6.style.background = `conic-gradient(#3531f2 ${valorInicial * 3.6}deg, #e5e7eb 0deg)`;

    if (valorInicial === valorfinal6) {
        clearInterval(progresso6);
    }
   
}, 50);

// Atualizar elementos HTML com os valores recuperados
document.getElementById("texto1").innerText = `Fase Alerta Físico: ${percentualAlertaFisico}%`;
document.getElementById("texto2").innerText = `Fase Alerta Psicológico: ${percentualAlertaPsicologico}%`;

document.getElementById("texto3").innerText = `Fase Resistência Físico: ${percentualAlertaFisico2}%`;
document.getElementById("texto4").innerText = `Fase Resistência Psicológico: ${percentualAlertaPsicologico2}%`;

document.getElementById("texto5").innerText = `Fase Exaustão Físico: ${percentualAlertaFisico3}%`;
document.getElementById("texto6").innerText = `Fase Exaustão Psicológico: ${percentualAlertaPsicologico3}%`;
