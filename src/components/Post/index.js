import React from "react";
import "./style.css";
var verificado = <img className="verificado" src="verificado.png" />;

const data = [
  {
    perfil: <img className="img-header-post" src="loreimprota.jpg" />,
    following: false,
    username: "loreimprota",
    publi: "7.408",
    follows: "14,3M",
    seguindo: "3.530",
  },
  {
    perfil: <img className="img-header-post" src="neymarjr.jpg" />,
    following: false,
    username: "neymarjr",
    publi: "5.423",
    follows: "204M",
    seguindo: "1.707",
  },
  {
    perfil: <img className="img-header-post" src="melissamelmaia.jpg" />,
    following: false,
    username: "melissamelmaia",
    publi: "3.038",
    follows: "17,9M",
    seguindo: "2.410",
  },
  {
    perfil: <img className="img-header-post" src="vanessalopesr_.jpg" />,
    following: false,
    username: "vanessalopesr_",
    publi: "1.839",
    follows: "13,2M",
    seguindo: "1.765",
  },
  {
    perfil: <img className="img-header-post" src="luisasonza.jpg" />,
    following: false,
    username: "luisasonza",
    publi: "2.572",
    follows: "30,8M",
    seguindo: "2.967",
  },
  {
    perfil: <img className="img-header-post" src="zefelipecantor.jpg" />,
    following: false,
    username: "zefelipecantor",
    publi: "1.108",
    follows: "25,7M",
    seguindo: "712",
  },
  {
    perfil: <img className="img-header-post" src="leodias.jpg" />,
    following: false,
    username: "leodias",
    publi: "13,9 mil",
    follows: "13,1M",
    seguindo: "1.966",
  },
  {
    perfil: <img className="img-header-post" src="mclomaofficial.jpg" />,
    following: false,
    username: "mclomaofficial",
    publi: "794",
    follows: "13,1M",
    seguindo: "583",
  },
  {
    perfil: <img className="img-header-post" src="euhytalosantos.jpg" />,
    following: false,
    username: "euhytalosantos",
    publi: "377",
    follows: "6,7M",
    seguindo: "3.530",
  },
  {
    perfil: <img className="img-header-post" src="lucasranngel.jpg" />,
    following: false,
    username: "lucasranngel",
    publi: "5.016",
    follows: "20,6M",
    seguindo: "1.619",
  },
  {
    perfil: <img className="img-header-post" src="bellacampox.jpg" />,
    following: false,
    username: "bellacampox",
    publi: "269",
    follows: "3,5M",
    seguindo: "1.271",
  },
  {
    perfil: <img className="img-header-post" src="aleoliveiracm.jpg" />,
    following: false,
    username: "aleoliveiracm",
    publi: "495",
    follows: "8,6M",
    seguindo: "2.727",
  },
  {
    perfil: <img className="img-header-post" src="bianca.jpg" />,
    following: false,
    username: "bianca",
    publi: "7.130",
    follows: "18,4M",
    seguindo: "2.347",
  },
  {
    perfil: <img className="img-header-post" src="leosantana.jpg" />,
    following: false,
    username: "leosantana",
    publi: "1.404",
    follows: "18,9M",
    seguindo: "1.467",
  },
];

export function Post({ increaseBalance, decreaseBalance }) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <header className="header-post">
            <div className="infos-post">
              {item.perfil}

              <p>{item.username} {verificado}</p>
            </div>

            <div className="infos">
              <div className="estatisticas">
                <div className="text">
                  <p>
                    <strong>{item.publi}</strong>
                    <br></br>
                    Publicações
                  </p>
                </div>
                <div className="text">
                  <p>
                    <strong>{item.follows}</strong>
                    <br></br>
                    Seguidores
                  </p>
                </div>
                <div className="text">
                  <p>
                    <strong>{item.seguindo}</strong>
                    <br></br>
                    Seguindo
                  </p>
                </div>
              </div>

              <button
                style={{
                  backgroundColor: data[index].following ? "#efefef" : null,
                  color: data[index].following ? "black" : null,
                }}
                onClick={() => {
                  if (!item.following) {
                    increaseBalance();
                  } else {
                    decreaseBalance();
                  }

                  data[index].following = !data[index].following;
                }}
              >
                {data[index].following ? "Seguindo" : "Seguir"}
              </button>
            </div>
          </header>
        );
      })}
    </>
  );
}
