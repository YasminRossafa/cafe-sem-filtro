import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const Menu = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      {/* Carrega Material Symbols e adiciona meta tag viewport */}
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Inria+Sans&family=Zen+Antique&display=swap"
          rel="stylesheet"
        />
        {/* Meta tag viewport para responsividade */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* CSS para responsividade com media queries */}
        <style>{`
          @media (max-width: 1280px) {
            body {
              min-width: 1280px;
              overflow-x: auto;
            }
          }
        `}</style>
      </Helmet>

      <div className="bg-white w-[1280px] h-[1483px]">
        <div className="relative h-[1483px] bg-[url(/images/caderno.png)] bg-cover bg-center">
          
          {/* Cardápio */}
          <p className="absolute w-[521px] top-[591px] left-[313px] font-inria font-bold text-[#1f1300] text-4xl text-[40px] leading-normal">
            Expresso ............. R$ 20
            <br />
            <br />
            Cappuccino ......... R$ 25
            <br />
            <br />
            Latte .................... R$ 18
            <br />
            <br />
            Mocha ................. R$ 22
            <br />
            <br />
            Cold Brew ........... R$ 30
            <br />
            <br />
            Macchiato ........... R$ 25
          </p>

          {/* Título "MENU" com texto maior */}
          <div className="absolute w-[277px] top-[393px] left-[350px] font-inria font-bold text-[#4c3000] text-[120px] leading-normal">
            MENU
          </div>

          {/* Fundo escuro transparente */}
          <div className="absolute w-full h-full top-0 left-0 bg-[#1e1a18]/50" />

          {/* Ícone de voltar com z-index maior */}
          <div className="absolute w-[134px] h-[143px] top-[45px] left-[70px] flex items-center justify-center">
            <Link to="/">
                <span className="material-symbols-outlined text-[#f2c38b] text-[100px]">
                chevron_left
                </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu;