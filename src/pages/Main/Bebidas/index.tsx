import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Bebidas() {

    
const data = [
  { 
    id: 1,
    snack: 'bebida',
    name:'Coca-Cola 2L',
    description: 'O hamburguer artesanal tamonho família recredo com três carnes suculentas, queijo e bacon',
    price: 25.5,
    image:'https://i.imgur.com/upjIUnG.jpg',
  },
  { 
    id: 2,
    snack: 'bebida',
    name:'Extra bacon',
    description: 'O hamburguer artesanal tamonho família recredo com três carnes suculentas, queijo e bacon',
    price: 25.5,
    image:'https://i.imgur.com/B4J04AJ.jpg',
  },
  { 
    id: 3,
    snack: 'bebida',
    name:'Extra bacon',
    description: 'O hamburguer artesanal tamonho família recredo com três carnes suculentas, queijo e bacon',
    price: 25.5,
    image:'https://i.imgur.com/B4J04AJ.jpg',
  },
]

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
