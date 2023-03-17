import styled from 'styled-components'

import BackgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

export const LoginImage = styled.img`
  height: 70%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-top: 100px;
  }

  img {
    width: 260px;
    height: 94px;
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  background: #ffffff;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  width: 391.42px;
  height: 38.32px;
  padding-left: 10px;
  color: #000;
`

export const SignInLink = styled.p`
  width: 187.3px;
  height: 22.99px;
  left: 792px;
  top: 671.57px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  a {
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    cursor: pointer;
    color: #ffffff;
  }
`
