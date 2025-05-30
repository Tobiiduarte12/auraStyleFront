import React from "react";
import {
  AddToCartButton,
  CardContent,
  CardDescription,
  CardImage,
  CardPrice,
  CardTitle,
  StyledCard,
} from "./CardCandleStyled";

const linkWhatsapp =
  "https://wa.me/5491131546782?text=Hola!%20Quiero%20hacerte%20un%20pedido%20%F0%9F%98%8A";

const CardCandle = ({ candle }) => {
  return (
    <StyledCard>
      <CardImage src={candle.image} alt={candle.name} />
      <CardContent>
        <CardTitle>{candle.name}</CardTitle>
        <CardDescription>{candle.description}</CardDescription>
        <CardPrice>${candle.price.toFixed(2)}</CardPrice>
        <AddToCartButton
          as="a"
          style={{ textDecoration: "none" }}
          href={linkWhatsapp}
          target="_blank"
        >
          Añadir al Carrito
        </AddToCartButton>
      </CardContent>
    </StyledCard>
  );
};

export default CardCandle;
