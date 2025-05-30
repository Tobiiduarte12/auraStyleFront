import React from "react";
import {
  CardGridStyled,
  CatalogSectionStyled,
  SectionTitleStyled,
} from "./CatalogoStyles";
import CardCandle from "../cardsDeVelas/CardCandle";
import candleData from "../../products/ArrayProducts";

export const CatalogoContainer = () => {
  return (
    <CatalogSectionStyled>
      <SectionTitleStyled>Nuestra Colección</SectionTitleStyled>

      <CardGridStyled>
        {/* Mapear las velas y renderizar una CandleCard para cada una */}
        {candleData.map((candle) => (
          <CardCandle key={candle.id} candle={candle} />
        ))}
      </CardGridStyled>
    </CatalogSectionStyled>
  );
};
