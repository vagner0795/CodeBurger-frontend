import styled from 'styled-components'

import Banner from '../../../assets/banner.jpg'
import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${Banner}');
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  padding: 100px;
`
export const Label = styled.p`
  color: #ffffff;
  font-size: 14px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border: none;
  min-width: 280px;
  padding-left: 10px;
  font-size: 20px;
`
export const ButtonStyles = styled(Button)`
  margin-top: 30px;
  width: 100%;
  height: 45px;
  font-size: 20px;
`

export const LabelUpload = styled.label`
  color: #ffffff;
  height: 40px;
  padding: 10px;

  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px dashed;
  border-radius: 5px;

  input {
    width: 1px;
    opacity: 0;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
