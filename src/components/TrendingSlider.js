"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import {FaUser} from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoTriangleRight } from "react-icons/go";
import "@/components/styles/TrendingSlider.css";

export default function TrendingSlider() {
  const filteredItems = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Gente vcs viram a cobrança no estacionamento?",
      place:"UNIPÊ",
      coment1: "Absurdo isso meu deus",
      coment2:'Não acredito que estão cobrando isso',
      coment3:'Vou ter que ir de ônibus agora ;(',
      social: 30,
      userName: "jpaulo_baia",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "FIO DE CABELO NO ALMOÇO DNVV",
      place: "IFPB",
      coment1: "Não acredito que isso aconteceu",
      coment2: "Que nojooooo",
      coment3: "se nao gostou pagava um marmitex ",
      social: 87,
      userName: "itallume@1",

    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Mais um aumento na mensalidade",
      place: "UNIESP",
      coment1: "aumentou denovo?",
      coment2: "Não aguento mais isso",
      coment3: "Vou ter que trancar a matricula kkkkkk",
      social: 22,
      userName: "caiobaX0",

    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3769087/pexels-photo-3769087.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Vi agr que arrumaram a sala de estudos",
      place: "UNINASSAU",
      coment1: "Que bom que finalmente arrumaram isso!",
      coment2: "Agora sim, um lugar decente para estudar.",
      coment3: "Espero que o wifi funcione melhor aqui.",
      social: 45,
      userName: "skyevez",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/2908189/pexels-photo-2908189.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Novo Café no Campus amo",
      place: "IFPB",
      coment1: "Amei o café novo, super recomendo!",
      coment2: "Finalmente um café decente aqui.",
      coment3: "Os preços estão ótimos!",
      social: 67,
      userName: "Lightzz"
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/7318/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&w=600",
      description: "Nova Opção de Almoço",
      place: "FPB",
      coment1: "A comida está uma delícia!",
      coment2: "Não gostei kkkk",
      coment3: "Espero que mantenham essa qualidade.",
      social: 53,
      userName: "anaR@quel"
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1288727/pexels-photo-1288727.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Biblioteca ta toppp",
      place: "UFPB",
      coment1: "Prometeu nada entregou tudo",
      coment2: "Agora tem mais mesas e cadeiras!",
      coment3: "Espero que o silêncio seja mantido.",
      social: 78,
      userName: "Per31Silva"

    }
    
    
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 290;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 290;
    console.log("entrei")
  };
  return (
    <>
      <div className="trending">
        <div className="buttonConfigsLeft">
          <button title="scroll left" onClick={slideLeft}>
            <AiOutlineArrowLeft />
          </button>{" "}
        </div>
        <div className="container">
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                <Link href={`/`} className="link">
                  {/* <div className="item-header">
                    <img src={item.img} alt="product" />
                  </div> */}
                  
                  <div className="item-usuario"> 
                  <IoPersonCircleOutline size={50} />
                  <p>@{item.userName}</p>
                  </div>

                  <div className="item-description">
                    <p>{item.description}</p>
                    <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  </div>

                  <div className="item-social">
                  <p className="item-place">{item.place}</p>
                    <div class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none">
                      <FaUser size={20} color={"black"}/>
                      <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-green-500 border-2 rounded-full -top-0.5 -end-1 ">{item.social}</div>
                    </div>
                  </div>
                  <div className="item-comments">
                    <ul> 
                      <li className="item-coment"><GoTriangleRight />{item.coment1}</li>
                      <li className="item-coment"><GoTriangleRight />{item.coment2}</li>
                      <li className="item-coment" id="item-coment-last"><GoTriangleRight />{item.coment3}</li>
                    </ul>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="buttonConfigsRight">
        <button title="scroll right" onClick={slideRight}>
          {" "}
          <AiOutlineArrowRight />
        </button>
        </div>
      </div>
    </>
  );
}
