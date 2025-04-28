import React from "react";
import { Helmet } from "react-helmet";

const Inicio = (): JSX.Element => {
  return (
    <>
      {/* Adiciona Material Symbols e fontes */}
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Inria+Sans&family=Zen+Antique&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[1280px] relative">
          <div className="absolute w-full min-h-screen top-0 left-0">
            {/* Fundo escuro */}
            <div className="absolute w-full h-[491px] top-[550px] left-0 bg-[#1e1a18]" />

            {/* Seção de Valores */}
            <div className="absolute w-[1184px] h-[361px] top-[580px] left-[50%] translate-x-[-50%]">
              {/* Título */}
              <div className="absolute w-[335px] top-0 left-[426px] font-zen text-[#f2c38b] text-[45px] leading-[70px] whitespace-nowrap text-center">
                Nossos Valores
              </div>

              {/* Cards de Valores */}
              <div className="absolute w-[313px] h-[145px] top-[90px] left-[15px]">
                <span className="material-symbols-outlined absolute w-24 h-[95px] top-0 left-[125px] text-[#f2c38b] text-6xl">
                  skillet
                </span>
                <div className="absolute w-[313px] top-[92px] left-0 font-bree text-[#f2c38b] text-xl leading-[70px] text-center">
                  Métodos de Preparação Exclusivos
                </div>
              </div>

              <div className="absolute w-[313px] h-[145px] top-[90px] left-[439px]">
                <span className="material-symbols-outlined absolute w-[74px] h-[95px] top-0 left-[114px] text-[#f2c38b] text-6xl">
                  grain
                </span>
                <div className="absolute w-[313px] top-[92px] left-0 font-bree text-[#f2c38b] text-xl leading-[70px] text-center">
                  Grãos Selecionados e Sustentáveis
                </div>
              </div>

              <div className="absolute w-[220px] h-[145px] top-[90px] left-[889px]">
                <span className="material-symbols-outlined absolute w-[92px] h-[95px] top-0 left-[65px] text-[#f2c38b] text-6xl">
                  connect_without_contact
                </span>
                <div className="absolute w-[220px] top-[92px] left-0 font-bree text-[#f2c38b] text-xl leading-[70px] text-center">
                  Experiências Interativas
                </div>
              </div>

              {/* Textos pequenos */}
              <p className="absolute w-[340px] top-[238px] left-0 font-inria text-[#f2c38b] text-xl text-center leading-[25px]">
                Oferecer métodos de preparo como prensa francesa, siphon e cold brew.
              </p>

              <p className="absolute w-[340px] top-[238px] left-[424px] font-inria text-[#f2c38b] text-xl text-center leading-[25px]">
                Trabalhar com fornecedores locais que utilizam práticas de cultivo sustentável, garantindo grãos de alta qualidade e de comércio justo.
              </p>

              <p className="absolute w-[340px] top-[238px] left-[830px] font-inria text-[#f2c38b] text-xl text-center leading-[25px]">
                Promover workshops de barista e degustações de café, onde os clientes podem aprender sobre a arte do café e experimentar a preparação de suas próprias bebidas.
              </p>
            </div>

            {/* Fundo início */}
            <img
              className="absolute w-full h-[550px] top-0 left-0 object-cover"
              alt="Fundo início"
              src="/images/fundo-inicio.png"
            />

            {/* Logo */}
            <img
              className="absolute w-[282px] h-[158px] top-[290px] left-[230px] object-cover"
              alt="Logo café sem filtro"
              src="/images/logo.webp"
            />

            {/* Topo */}
            <div className="absolute w-[1054px] h-[52px] top-[54px] left-[50%] translate-x-[-50%] flex justify-between items-center">
              <div className="flex gap-4">
                <div className="font-inria text-[#f2c38b] text-[40px]">SOBRE |</div>
                <div className="font-inria text-[#f2c38b] text-[40px]">MENU |</div>
                <div className="font-inria text-[#f2c38b] text-[40px]">CONTATO</div>
              </div>

              <a
                style={{ color: "black" }}
                className="relative w-[254px] h-[52px] bg-[#d4903e] flex items-center justify-center font-inria no-underline text-[32px]"
                href="https://wa.me/5511991407988?text=Quero%20saber%20mais%20sobre%20a%20cafeteria%2C%20vi%20algumas%20informa%C3%A7%C3%B5es%20no%20site!"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>

            {/* Texto Principal */}
            <p className="absolute w-[435px] top-[198px] left-[785px] font-bold text-[#f2c38b] text-5xl text-center">
              Métodos artesanais, grãos selecionados <br></br>
              e uma experiência incrível!
            </p>
          </div>

          {/* Rodapé */}
          <div className="absolute w-full h-[162px] top-[1000px] left-0 bg-[#3f322b]">
            <div className="relative w-[1089px] h-[72px] top-[37px] left-[50%] translate-x-[-50%] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f2c38b] text-4xl">call</span>
                <div className="font-inria text-[#f2c38b] text-3xl">(11) 99140-7988</div>
              </div>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f2c38b] text-4xl">location_on</span>
                <p className="font-inria text-[#f2c38b] text-3xl">Rua dos Grãos de Café - 12345-678</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f2c38b] text-4xl">schedule</span>
                <p className="font-inria text-[#f2c38b] text-3xl text-right">
                  Seg à Sab<br />06h às 19h
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
