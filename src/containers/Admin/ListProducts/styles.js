import ModeEditIcon from '@mui/icons-material/ModeEdit'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 015);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`
export const EditIcon = styled(ModeEditIcon)`
  cursor: pointer;
  color: #7c488a;
`
