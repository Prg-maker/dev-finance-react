import {
  Container,
  Title,
  Icon,
  Money,
} from './styles'

interface PropsCard{
  title: string;
  money: string;
  nameIcon?: string;
}

export function Cards({
  money,
  title
}: PropsCard){
  return(
    <Container>
      
      <div className={title}>
        <Title className={title}>{title}</Title>
        <Icon  className={title}/>
      </div>

      <Money>R$ {money}</Money>

    </Container>
  )
}