import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const Menu = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Inria+Sans&family=Zen+Antique&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
        .menu-container {
            width: 1280px;
            height: 1483px;
            background-image: url('/images/caderno.png');
            background-size: cover;
            background-position: center;
            position: relative;
        }

        .menu-title {
            position: absolute;
            top: 393px;
            left: 350px;
            font-size: 120px;
        }

        .menu-cardapio {
            position: absolute;
            top: 591px;
            left: 313px;
            width: 521px;
            font-size: 40px;
        }

        .menu-voltar {
            position: absolute;
            top: 45px;
            left: 70px;
            width: 134px;
            height: 143px;
        }

        .menu-voltar span {
            font-size: 100px;
        }

        /* Tablet */
        @media (max-width: 1024px) {
            .menu-container {
            width: 100%;
            min-height: 1000px;
            padding-bottom: 100px;
            }

            .menu-title {
            top: 500px;
            left: 30%;
            font-size: 80px;
            }

            .menu-cardapio {
            top: 650px;
            left: 15%;
            width: 80%;
            font-size: 28px;
            }

            .menu-voltar {
            top: 30px;
            left: 30px;
            width: 100px;
            height: 100px;
            }

            .menu-voltar span {
            font-size: 70px;
            }
        }

        /* Celular */
        @media (max-width: 640px) {
            .menu-container {
            width: 100%;
            padding-bottom: 100px;
            }

            .menu-title {
            top: 400px;
            left: 30%;
            font-size: 80px;
            }

            .menu-cardapio {
            top: 550px;
            left: 15%;
            width: 90%;
            font-size: 22px;
            }

            .menu-voltar {
            top: 20px;
            left: 20px;
            width: 80px;
            height: 80px;
            }

            .menu-voltar span {
            font-size: 50px;
            }
        }
        `}</style>

      </Helmet>

      <div className="relative bg-[url(/images/caderno.png)] bg-cover bg-center menu-container">
        
        {/* Fundo escuro transparente */}
        <div className="absolute w-full h-full top-0 left-0 bg-[#1e1a18]/50 z-0" />

        {/* Ícone de voltar */}
        <div className="menu-voltar z-10 flex items-center justify-center">
          <Link to="/">
            <span className="material-symbols-outlined text-[#f2c38b]">
              chevron_left
            </span>
          </Link>
        </div>

        {/* Título "MENU" */}
        <div className="menu-title font-inria font-bold text-[#4c3000] leading-normal z-10">
          MENU
        </div>

        {/* Cardápio */}
        <p className="menu-cardapio font-inria font-bold text-[#1f1300] leading-normal z-10">
          Expresso ............. R$ 20
          <br /><br />
          Cappuccino ......... R$ 25
          <br /><br />
          Latte .................... R$ 18
          <br /><br />
          Mocha ................. R$ 22
          <br /><br />
          Cold Brew ........... R$ 30
          <br /><br />
          Macchiato ........... R$ 25
        </p>
      </div>
    </div>
  );
};

export default Menu;
