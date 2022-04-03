import {
  Container,
  Title,
  Icon,
  Money,
} from './styles'

interface PropsCard{
  title: string;
  money: string;
}

export function CardTotal({
  money,
  title
}: PropsCard){
  return(
    <Container>
      
      <div >
        <Title>{title}</Title>
        <Icon/>
      </div>

      <Money>R$ {money}</Money>

    </Container>
  )
}