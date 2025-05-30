import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 320px;
  margin: 16px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 12px 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid #eee;

  @media (max-width: 600px) {
    height: 150px;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 14px;
  }
`;

export const CardTitle = styled.h3`
  color: #ff80ab;
  font-size: 1.4em;
  margin: 0 0 10px 0;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 1.1em;
  }
`;

export const CardDescription = styled.p`
  color: #666;
  font-size: 1em;
  margin-bottom: 15px;
  flex-grow: 1;

  @media (max-width: 600px) {
    font-size: 0.95em;
  }
`;

export const CardPrice = styled.p`
  color: #ff4081;
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 1.1em;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #ffc0cb;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff80ab;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    padding: 10px 14px;
    font-size: 0.95em;
  }
`;

// Si tienes un contenedor de cards, agrégale esto:
export const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  @media (max-width: 900px) {
    gap: 16px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
  }
`;
