import {TD , TR ,TDData, TDMoney } from './styles'

interface Props{
  title: string;
  money: number;
  data: string
}

export function Info({
  data,
  money,
  title
}:Props){


  return(
    <TR>
      <TD>{title}</TD>
      <TDMoney>R$ {money} </TDMoney>
      <TDData>{data}</TDData>
    </TR>
  )
}