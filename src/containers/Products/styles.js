import styled from 'styled-components'

export const ContainerMain = styled.div`
  color: #000;
  background-color: #e5e5e5;
  min-height: calc(100vh - 72px);
`
export const ProductImg = styled.img`
  width: 100%;
`
export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 600px) {
    gap: 20px;
    width: 100%;
  }
`
export const CategoryButton = styled.button`
  border: none;
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
  padding-bottom: 5px;
  cursor: pointer;
  background: none;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`
