import Exercice from "./container/Exercice";
import { useState } from "react";
export default function Exercice3() {
  // 1. Crée un state pour suivre l'état de visibilité du texte.
  const [visible, setVisible] = useState(false);
  // 2. Implémente une fonction pour basculer a l'état contraire ! .
  const oppositeVisible = () => {
    setVisible(!visible);
  };
  // 3. Passe la fonction de toggle au bouton.
  // 4. Affiche ou masque le texte en fonction de l'état de visibilité.
  return (
    <Exercice>
      <h2>Exercice 3 : Toggle</h2>
      <p className="instructions">
        Modifie le composant Exercice3 pour basculer entre "Afficher" et "Masquer" un texte.
      </p>
      <div className="solution">
        <div>
          <button onClick={oppositeVisible}>Afficher/Masquer</button>
          {/* 5. Affiche conditionnellement le paragraphe en fonction de l'état */}
          {visible && <p>Texte à afficher/masquer</p>}
        </div>
      </div>
    </Exercice>
  );
}
