import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged cuida do resto
    } catch (error) {
      alert("Login inválido. Verifique seu email e senha.");
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleLogin}>
        <div className={styles.iconWrapper}>
          <img src="/book_icon.png" alt="Book Icon" className={styles.icon} />
        </div>
        <h2 className={styles.title}>Welcome Back!</h2>
        <p className={styles.subtitle}>
          Sign in to continue your English learning journey
        </p>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Sign In →
        </button>
      </form>
    </div>
  );
}
