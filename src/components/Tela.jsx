import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Sectory = styled.section`
  background: #f2f2f2;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 0 auto;
  max-width: 1140px;
  padding: 1rem;

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    max-width: 540px;
  }
`;

const Screen = styled.div`
  & img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

const ContainerThumbnail = styled.div`
  display: flex;
  gap: 1rem;
`;

const Thumbnail = styled.div`
  width: 100%;
  & img {
    cursor: pointer;
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

const ContainerDatasProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Titulo = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 2em;
`;

const Reference = styled.div`
  margin: 0;
  padding: 0.3em;
  font-size: 12px;
  color: #00000080;
`;

const Status = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;

  & i {
    color: orange;
    font-size: 13px;
  }
`;

const StatusNota = styled.div`
  background: orange;
  border-radius: 2px;
  color: white;
  width: fit-content;
  padding: 4px 6px 4px 4px;
  margin: 0 0.5rem;

  & i,
  span {
    color: white;
    padding: 3px;
    font-size: 12px;
  }
`;

const StatusNumberAvaliation = styled.div`
  color: gray;
`;

const Price = styled.div`
  color: #474747;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: end;

  & span.simbolo {
    padding-bottom: 3px;
    padding-right: 3px;
  }

  & span.priceAtual {
    display: block;
    font-weight: bold;
    font-size: 28px;
  }

  & span.priceOld {
    color: gray;
    font-size: 16px;
    text-decoration: line-through;
    padding-bottom: 3px;
    padding-left: 1rem;
    font-weight: 800;
  }
`;

const Description = styled.div`
  margin: 0;
  padding: 0em;
`;

const TitleDescription = styled.h4`
  margin: 0 0 0.6em 0;
  color: #00000090;
`;

const TextDescription = styled.p`
  font-size: 13px;
  color: #474747;
  line-height: 156%;
  font-weight: 500;
`;

const SizeProduct = styled.div`
  margin: 0;
  display: flex;
  // gap: 14px;
  flex-wrap: wrap;
  gap: 10px;

  & h5 {
    flex-grow: 1;
    width: 100%;
    margin: 0;
    parging: 0;
    margin-top: 4px;
  }

  & button {
    border: 2px gray solid;
    border-radius: 3px;
    height: 50px;
    width: 50px;
    background: white;
    border-radius: 6px;
    transition: 0.2s all;
    margin-top: 3px;
  }

  & button:hover {
    border: 2px orange solid;
    transition: 0.2s all;
    cursor: pointer;
  }
`;

const ColorProduct = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  & h5 {
    flex-grow: 1;
    width: 100%;
    margin-top: 4px;
  }

  & span.item-blue {
    background: #aabb00;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  & span.item-red {
    background: red;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  & span.item-black {
    background: black;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  & span.item-white {
    background: white;
    border: 1px solid gray;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

const Btn = styled.button`
  border: 0;
  border-radius: 4px;
  background: orange;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  height: 40px;
  cursor: pointer;
  width: fit-content;
  margin: 0.7rem 0 0 0;
`;

export function Tela() {
  const [ImageUrl, setUrlImage] = useState(
    "https://images.pexels.com/photos/8294659/pexels-photo-8294659.jpeg"
  );

  function HandleFoto1() {
    setUrlImage(
      "https://images.pexels.com/photos/8294659/pexels-photo-8294659.jpeg"
    );
  }

  function HandleFoto2() {
    setUrlImage(
      "https://images.pexels.com/photos/8566466/pexels-photo-8566466.jpeg"
    );
  }

  function HandleFoto3() {
    setUrlImage(
      "https://images.pexels.com/photos/176842/pexels-photo-176842.jpeg"
    );
  }

  function HandleFoto4() {
    setUrlImage(
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
    );
  }

  return (
    <Sectory>
      <Container>
        <div>
          <Screen>
            <img src={ImageUrl} alt="Imagem principal" />
          </Screen>

          <ContainerThumbnail>
            <Thumbnail>
              <img
                src="https://images.pexels.com/photos/8294659/pexels-photo-8294659.jpeg"
                alt="Imagem 1"
                onClick={HandleFoto1}
              />
            </Thumbnail>
            <Thumbnail>
              <img
                src="https://images.pexels.com/photos/8566466/pexels-photo-8566466.jpeg"
                alt="Imagem 2"
                onClick={HandleFoto2}
              />
            </Thumbnail>
            <Thumbnail>
              <img
                src="https://images.pexels.com/photos/176842/pexels-photo-176842.jpeg"
                alt="Imagem 3"
                onClick={HandleFoto3}
              />
            </Thumbnail>
            <Thumbnail>
              <img
                src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
                alt="Imagem 4"
                onClick={HandleFoto4}
              />
            </Thumbnail>
          </ContainerThumbnail>
        </div>

        <ContainerDatasProduct>
          <Titulo>Tênis Nike Revolution 6 Next Nature Masculino</Titulo>
          <Reference>Casual | Nike | REF:38416711</Reference>

          <Status>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>

            <StatusNota>
              <i className="fa-solid fa-star"></i>
              <span>4.7</span>
            </StatusNota>

            <StatusNumberAvaliation>(90 avaliações)</StatusNumberAvaliation>
          </Status>

          <Price>
            <span className="simbolo">R$</span>{" "}
            <span className="priceAtual">250,00</span>
            <span className="priceOld">R$ 190,00</span>
          </Price>
          <Description>
            <TitleDescription>Descrição do produto</TitleDescription>
            <TextDescription>
              Atletas que buscam um tênis confiável para manter o ritmo em
              treinos e também para aqueles que não abrem mão do estilo no dia a
              dia. O Nike Revolution 6 Next Nature é perfeito para quem quer
              aliar a paixão pelo esporte com a consciência ambiental.
            </TextDescription>
          </Description>
          <SizeProduct>
            <h5>Tamanho</h5>
            <button>36</button>
            <button>37</button>
            <button>38</button>
            <button>39</button>
            <button>40</button>
          </SizeProduct>
          <ColorProduct>
            <h5>Cores</h5>
            <span className="item-blue"></span>
            <span className="item-red"></span>
            <span className="item-black"></span>
            <span className="item-white"></span>
          </ColorProduct>
          <Btn>Comprar</Btn>
        </ContainerDatasProduct>
        {/* fim do containerDatas*/}
      </Container>
    </Sectory>
  );
}
