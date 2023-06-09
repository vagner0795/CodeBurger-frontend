import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerMain = styled.div`
  background-color: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;
  padding: 15px;

  hr {
    margin: 100px 0;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: #ffffff;
  }
`

export const ListLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  line-height: 19px;
  margin-left: 10px;
`
