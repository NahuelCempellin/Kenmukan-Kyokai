import React from "react";
import Noto from "../../../assets/Noto.jpg";

const Iaido = () => {
  return (
    <div className="kendo-container">
      <div className="kendo-image">
        <img src={Noto} alt="iaido" />
      </div>

      <div className="kendo-Text">
        <h3>¿Que es Iaido - 居合道?</h3>
        <p>{`El iaidō en japonés, 居合道 es un arte marcial japonés​ relacionado con el desenvainado y el envainado de la katana. Era practicado por los samuráis, especialmente en el periodo Edo. Estas técnicas surgen principalmente para poder atacar o defenderse a la vez que se desenvainaba, comenzando por tanto el enfrentamiento con el arma aún en la saya (vaina) y desenvainando con la velocidad apropiada para atacar o contraatacar al oponente sin darle tiempo a reaccionar. La principal idea del iaidō es ser capaz de reaccionar correctamente ante cualquier situación inesperada.
          `}</p>
      </div>
    </div>
  );
};

export default Iaido;
