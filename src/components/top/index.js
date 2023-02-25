import "./style.css";
var logo = "logo.png";

export function Top({ balance }) {
  return (
    <header className="top">
      <div className="container">
        <img className="logo" src={logo} />

        <div className="saldo">
          <span>
            R$ <strong id="saldo">{balance}</strong>,00
          </span>
        </div>

        <a href="pix" className="button">
          SAQUE
        </a>
      </div>
    </header>
  );
}
