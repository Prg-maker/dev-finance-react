import {
  Container,
  Header,
  DevFinanceImg,
  MoneyImg,
} from './styles'


import {Cards} from '../../components/Cards'


import Img from '../../assets/Fin.Month.svg'
import { CardTotal } from '../../components/CardTotal'

export function Home(){
  return(
    <Container>
      <Header>

        <div className='devFinance'>
          <DevFinanceImg src={Img} alt="devFinance"/>
          <MoneyImg/>
        </div>

        <div className='c-cards'> 
          <Cards
            title='entradas'
            money={123}
          />
          <Cards
            title='Saídas'
            money={123}
          />

          <CardTotal
            title='Total'
            money={123}
          />
        </div>

       
      </Header>

    </Container>
  )
}