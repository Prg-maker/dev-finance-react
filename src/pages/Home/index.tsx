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
        <div className='wrapperCard'>

          <div className='c-cards'> 
            <Cards
              title='entradas'
              money='17.400.00' 
            />
            <Cards
              title='Saídas'
              money='1.259,00'
            />

            <CardTotal
              title='Total'
              money='16.141,00'
            />
          </div>

        </div>
        
       
      </Header>

    </Container>
  )
}