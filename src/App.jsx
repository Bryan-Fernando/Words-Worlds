import { useEffect, useState } from "react";
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import AppRoutes from "./routes/Routes";
import Login from "./login";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        
        const loginTime = localStorage.getItem("loginTime");
        if (loginTime) {
          const now = Date.now();
          const diffMs = now - parseInt(loginTime, 10);
          const twoHoursMs = 2 * 60 * 60 * 1000;

          if (diffMs > twoHoursMs) {
           
            signOut(auth).then(() => {
              localStorage.removeItem("loginTime");
              setUser(null);
            });
            return; 
          }
        }

        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      {user ? <AppRoutes /> : <Login />}
    </Router>
  );
}
