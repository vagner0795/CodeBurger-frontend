import AddBoxIcon from '@mui/icons-material/AddBox'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: LocalMallRoundedIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ShoppingCartRoundedIcon
  },
  {
    id: 3,
    label: 'Criar Produto',
    link: paths.NewProduct,
    icon: AddBoxIcon
  }
]

export default listLinks
