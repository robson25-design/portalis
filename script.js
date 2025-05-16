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
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const company = document.getElementById("company").value;
  const keyNumber = document.getElementById("keyNumber").value;

  try {
    await addDoc(collection(db, "visitors"), {
      fullName,
      phone,
      company,
      keyNumber,
      timestamp: new Date()
    });

    document.getElementById("confirmationMsg").innerText = "Registered successfully!";
    e.target.reset();
  } catch (error) {
    document.getElementById("confirmationMsg").innerText = "Error registering. Try again.";
    console.error("Firestore error:", error);
  }
});