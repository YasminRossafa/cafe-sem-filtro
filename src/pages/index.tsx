import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const Inicio = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          /* Mantendo a imagem de fundo com suas dimensões originais em todos os dispositivos */
          .fundo-inicio {
            width: 100%;
            height: 550px;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
          }
          
          /* Estilos base para a seção de valores */
          #nossos-valores {
            position: absolute;
            width: 100%;
            background-color: #1e1a18;
            padding: 30px 20px;
            box-sizing: border-box;
            top: 550px;
          }
          
          .valores-titulo {
            font-family: 'Zen Antique', serif;
            color: #f2c38b;
            font-size: 45px;
            text-align: center;
            margin-bottom: 40px;
          }
          
          .valores-container {
            display: flex;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .valor-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 30%;
          }
          
          .valor-icone {
            font-size: 80px;
            color: #f2c38b;
          }
          
          .valor-titulo {
            font-family: 'Bree Serif', serif;
            color: #f2c38b;
            font-size: 20px;
            text-align: center;
            margin: 20px 0;
          }
          
          .valor-texto {
            font-family: 'Inria Sans', sans-serif;
            color: #f2c38b;
            font-size: 18px;
            text-align: center;
            line-height: 25px;
          }
          
          /* Estilos base para o rodapé */
          #rodape {
            position: absolute;
            width: 100%;
            background-color: #3f322b;
            top: 1000px;
            padding: 30px 0;
          }
          
          .rodape-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1100px;
            margin: 0 auto;
            width: 95%;
          }
          
          .rodape-item {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .rodape-texto {
            font-family: 'Inria Sans', sans-serif;
            color: #f2c38b;
            font-size: 24px;
          }
          
          /* Media query para celulares */
          @media (max-width: 768px) {
            .fundo-inicio {
              width: 100% !important; 
              height: 400px !important;
            }
            
            .logo {
              width: 135px;
              height: 80px;
              top: 210px;
              left: 30%;
              transform: translateX(-50%);
            }

            .desktop-nav {
              display: none !important;
            }

            .mobile-menu {
              display: flex !important;
            }

            .hamburguer-button {
              display: block !important;
            }

            .texto-principal {
              width: 250px;
              top: 130px;
              right: 2%;
              left: auto;
              font-size: 22px;
              text-align: center;
            }

            .whatsapp-button {
              width: 160px;
              height: 40px;
              font-size: 22px;
              right: 7%;
              left: auto;
            }
            
            #nossos-valores {
              top: 400px;
            }
            
            .valores-titulo {
              font-size: 36px;
              margin-bottom: 25px;
            }
            
            .valores-container {
              flex-direction: column;
              align-items: center;
              gap: 30px;
            }
            
            .valor-card {
              width: 100%;
              max-width: 340px;
            }
            
            .valor-icone {
              font-size: 60px;
            }
            
            .valor-titulo {
              font-size: 18px;
              margin: 15px 0;
            }
            
            .valor-texto {
              font-size: 16px;
            }
            
            #rodape {
              margin-top: 250px;
            }
            
            .rodape-container {
              flex-direction: column;
              gap: 20px;
            }
            
            .rodape-texto {
              font-size: 18px;
            }
          }

          /* Media query para tablets */
          @media (min-width: 769px) and (max-width: 1024px) {
            .fundo-inicio {
              width: 100% !important;
              height: 550px !important;
            }
            
            .logo {
              width: 220px;
              height: 120px;
              top: 280px;
              left: 32%;
              transform: translateX(-50%);
            }

            .desktop-nav {
              display: none !important;
            }

            .mobile-menu {
              display: flex !important;
            }

            .hamburguer-button {
              display: block !important;
            }

            .texto-principal {
              width: 400px;
              top: 130px;
              left: auto;
              right: 2%;
              font-size: 30px;
              text-align: center;
            }
            
            .whatsapp-button {
              left: auto;
              right: 10%;
              width: 200px;
              height: 45px;
              font-size: 26px;
            }
            
            .valor-card {
              width: 32%;
            }
            
            .valor-icone {
              font-size: 70px;
            }
            
            #rodape {
              margin-top: 50px;
            }
            
            .rodape-container {
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
            }
            
            .rodape-item {
              width: 45%;
            }
          }

          @media (min-width: 1025px) {
            .hamburguer-button {
              display: none !important;
            }
          }
        `}</style>
      </Helmet>

      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-full max-w-[1280px] relative">

          <div className="absolute w-full min-h-screen top-0 left-0">

            <img
              className="fundo-inicio object-cover"
              alt="Fundo início"
              src="/images/fundo-inicio.png"
            />

            <img
              className="logo absolute w-[282px] h-[158px] top-[290px] left-[263px] object-cover"
              alt="Logo café sem filtro"
              src="/images/logo.png"
            />

            <div className="absolute w-full max-w-[1054px] h-[52px] top-[54px] left-[50%] translate-x-[-50%] flex justify-between items-center z-10 px-4">
              <div className="desktop-nav flex gap-4">
                <a href="#nossos-valores" className="no-underline font-inria text-[#f2c38b] text-[40px]">SOBRE | </a>
                <Link to="/menu" className="font-inria text-[#f2c38b] no-underline text-[40px]">| MENU |</Link>
                <a href="#rodape" className="no-underline font-inria text-[#f2c38b] text-[40px]">| CONTATO</a>
              </div>

              <button
                className="hamburguer-button bg-transparent border-none p-0 md:hidden z-50"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="material-symbols-outlined text-[#f2c38b] text-5xl">menu</span>
              </button>

              <a
                style={{ color: "black" }}
                className="relative whatsapp-button w-[254px] h-[52px] bg-[#d4903e] flex items-center justify-center font-inria no-underline text-[32px]"
                href="https://wa.me/5511991407988?text=Quero%20saber%20mais%20sobre%20a%20cafeteria%2C%20vi%20algumas%20informa%C3%A7%C3%B5es%20no%20site!"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            {menuOpen && (
              <div className="fixed top-0 left-0 h-full w-[220px] bg-[#1e1a18] z-50 flex flex-col p-6 gap-6 transition-all">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#f2c38b] self-end text-3xl bg-transparent"
                >
                  ×
                </button>
                <a href="#nossos-valores" className="text-[#f2c38b] font-inria text-2xl">
                  Sobre
                </a>
                <Link to="/menu" className="text-[#f2c38b] font-inria text-2xl">
                  Menu
                </Link>
                <a href="#rodape" className="text-[#f2c38b] font-inria text-2xl">
                  Contato
                </a>
              </div>
            )}

            <p className="texto-principal absolute w-[435px] top-[150px] left-[825px] font-bold text-[#f2c38b] text-[45px] text-center">
              Métodos artesanais, grãos selecionados <br></br>
              e uma experiência incrível!
            </p>
          </div>
          <div id="nossos-valores">
            <h2 className="valores-titulo">Nossos Valores</h2>
            
            <div className="valores-container">
              <div className="valor-card">
                <span 
                  className="material-symbols-outlined valor-icone"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
                >
                  skillet
                </span>
                <h3 className="valor-titulo">Métodos de Preparação Exclusivos</h3>
                <p className="valor-texto">
                  Oferecer métodos de preparo como prensa francesa, siphon e cold brew.
                </p>
              </div>
              
              <div className="valor-card">
                <span 
                  className="material-symbols-outlined valor-icone"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
                >
                  grain
                </span>
                <h3 className="valor-titulo">Grãos Selecionados e Sustentáveis</h3>
                <p className="valor-texto">
                  Trabalhar com fornecedores locais que utilizam práticas de cultivo sustentável, garantindo grãos de alta qualidade e de comércio justo.
                </p>
              </div>
              
              <div className="valor-card">
                <span 
                  className="material-symbols-outlined valor-icone"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
                >
                  connect_without_contact
                </span>
                <h3 className="valor-titulo">Experiências Interativas</h3>
                <p className="valor-texto">
                  Promover workshops de barista e degustações de café, onde os clientes podem aprender sobre a arte do café e experimentar a preparação de suas próprias bebidas.
                </p>
              </div>
            </div>
          </div>
          
          <div id="rodape">
            <div className="rodape-container">
              <div className="rodape-item">
                <span className="material-symbols-outlined text-[#f2c38b] text-4xl">call</span>
                <div className="rodape-texto">(11) 99140-7988</div>
              </div>

              <div className="rodape-item">
                <span className="material-symbols-outlined text-[#f2c38b] text-4xl">location_on</span>
                <p className="rodape-texto">Rua dos Grãos de Café - 12345-678</p>
              </div>

              <div className="rodape-item">
                <span className="material-symbols-outlined text-[#f2c38b] text-4xl">schedule</span>
                <p className="rodape-texto">
                  Seg à Sab - 06h às 19h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;