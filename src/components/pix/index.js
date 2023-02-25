import "./style.css";
import { Top } from "../top";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
var pix = 'pix.png';

export function Pix() {
  return (
    <>
      <Top balance={122} />
      <main className="container_pix">
        <div className="infos-user">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>

          <div className="content-text">
            <p className="name">Telma Maria Soares</p>
            <p className="email">empresarica03gmai.com</p>
          </div>
        </div>

        <div className="saldo">
          <p className="text">
            SEU SALDO
          </p>

          <div className="text-saldo">
            <p>
              <strong>R$</strong> <strong>122</strong>,00
            </p>
          </div>
        </div>

        <div className="typepix">
          <p>Selecione o tipo da sua chave pix:</p>

          <div className="img_pix">
            <img src={pix} alt="pix" />
          </div>
        </div>

        <form action="../saque">
          <input className="input-pix" typeof="text" placeholder="Chave Pix" />
          <input className="input-valor" typeof="number" placeholder="0,00" />

          <button type="submit">SACAR</button>
        </form>
      </main>
    </>
  );
}

export default Pix;
