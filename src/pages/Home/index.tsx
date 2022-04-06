import {
  Container,
  Header,
  MoneyImg,
  Main,
  Table,
  Thead
} from './styles'


import {Info} from '../../components/Info'


import {Cards} from '../../components/Cards'


import Img from '../../assets/Fin.Month.svg'
import { CardTotal } from '../../components/CardTotal'

export function Home(){
  return(
    <Container>
      <Header>

        <div className='devFinance'>
          <img src={Img} alt="devFinance"/>
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

      <Main>

        <Table>
          <Thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </Thead>


          <tbody>
            <Info
              money={123}
              data={new Date().toDateString()}
              title={'Desenvolvimento de um site'}
              key={123}
            />
            <Info
              money={-123}
              data={new Date().toDateString()}
              title={'Desenvolvimento de um site'}
              key={1246}
            />
          </tbody>

        </Table>



      </Main>

    </Container>
  )
}