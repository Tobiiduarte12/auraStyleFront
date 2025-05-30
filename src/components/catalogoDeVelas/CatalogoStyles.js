import styled from "styled-components";

// Componente de estilo para la sección del catálogo
export const CatalogSectionStyled = styled.section`
  max-width: 960px;
  width: 100%;
  padding: 30px; /* Más padding */
  border-radius: 12px; /* Bordes redondeados */
  background-color: #fffaf0; /* Blanco cremoso (Floral White) */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08); /* Sombra para la sección */
`;

// Componente de estilo para el título de la sección
export const SectionTitleStyled = styled.h2`
  color: #ff69b4; /* Rosa fuerte (Hot Pink) */
  font-size: 2.5em; /* Título más grande */
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase; /* Texto en mayúsculas */
  letter-spacing: 2px; /* Espaciado entre letras */
`;

// Componente de estilo para la cuadrícula de tarjetas
export const CardGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(280px, 1fr)
  ); /* Ajuste para tarjetas más grandes */
  gap: 25px; /* Más espacio entre tarjetas */
`;
