import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1skIEBu06BC82AxvDBUUoyznmdS3h18Y",
  authDomain: "portalis4you.firebaseapp.com",
  projectId: "portalis4you",
  storageBucket: "portalis4you.appspot.com",
  messagingSenderId: "866746677124",
  appId: "1:866746677124:web:6e6cbb15ef882d243dcfd1"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Captura envio do formulário
document.getElementById("signInForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const company = document.getElementById("company").value;

  try {
    await addDoc(collection(db, "visitors"), {
      fullName,
      phone,
      company,
      timestamp: new Date()
    });

    alert("Check-in enviado com sucesso!");
    document.getElementById("signInForm").reset();
  } catch (err) {
    alert("Erro ao enviar check-in: " + err.message);
  }
});