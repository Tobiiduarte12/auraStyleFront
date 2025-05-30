import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto", sans-serif;
  /* background-color:rgb(243, 186, 180); Fondo rosa claro (Misty Rose) */
  background-image: url("https://i.ibb.co/NgHCjhLJ/fondov2.jpg"); /* Fondo de imagen */
  /* background-size: cover; */
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  }`;
