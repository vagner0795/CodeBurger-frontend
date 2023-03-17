import styled from 'styled-components'

export const ContainerMain = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  padding: 10px;
  width: max-content;
  border-radius: 30px;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;

  p {
    font-size: 16px;
    color: #9657a5;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  width: max-content;
  grid-gap: 10px 15px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }

  button {
    margin-bottom: 100px;
  }
  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      color: #000000;
      border: none;
      background-color: transparent;
      font-size: 24px;
      cursor: pointer;
    }
    p {
      margin-top: 7px;
    }
  }
`

export const EmptCart = styled.p`
  color: #000000;
  text-align: center;
  font-weight: bold;
  margin-top: 100px;
  font-size: 18px;
`

export const CartImage = styled.img`
  width: 200px;
  display: flex;
  margin-top: 20px;
  margin-left: 160px;
  padding-bottom: 30px;
`

export const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  img {
    width: 20px;
  }
`
