import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1skIEBu06BC82AxvDBUUoyznmdS3h18Y",
  authDomain: "portalis4you.firebaseapp.com",
  projectId: "portalis4you",
  storageBucket: "portalis4you.appspot.com",
  messagingSenderId: "866746677124",
  appId: "1:866746677124:web:6e6cbb15ef882d243dcfd1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("signInForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // EVITA O REFRESH DA PÁGINA

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

    alert("Visitante registrado com sucesso!");

    // Opcional: limpar campos
    e.target.reset();

  } catch (err) {
    console.error("Erro ao registrar: ", err);
    alert("Erro ao registrar. Veja o console.");
  }
});