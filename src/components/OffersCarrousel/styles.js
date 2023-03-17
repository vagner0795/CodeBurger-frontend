import styled from 'styled-components'

export const ContainerMain = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    background-color: #efefef;
    border: 1px solid #9758a6;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`
export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;

    color: #424242;
  }
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  margin-top: 16px;
  padding: 21px 48px;
  gap: 10px;
  width: 300px;
  height: 50px;
  background: #9758a6;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`
