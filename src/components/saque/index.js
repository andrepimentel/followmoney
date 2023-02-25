import "./style.css";
var check = "check.png";

export function Saque() {
  return (
    <main className="comprovante">
      <section className="container">
        <div className="check">
          <img src={check} alt="check"/>
        </div>

        <p className="title">
          Saque realizado com sucesso!
        </p>

        <p className="price">
          Valor sacado:
          <br></br>
          <strong>
            R$ 122,00
          </strong>
        </p>

        <p className="text">
          Envie-nos Sugestões/Feedback
        </p>

        <a href="../" className="voltar">voltar</a>
      </section>
    </main>
  );
}

export default Saque;
