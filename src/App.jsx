import { useEffect, useState } from "react";
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import AppRoutes from "./routes/Routes";
import Login from "./login";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Router>
      {user ? <AppRoutes /> : <Login onLogin={() => {}} />}
    </Router>
  );
}

export default App;
