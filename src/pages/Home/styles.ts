import styled from "styled-components";

import {MdOutlineAttachMoney} from 'react-icons/md'

export const Container  = styled.div`
  height: 100%;
  background: #F0F2F5;
`


export const Header = styled.div`
  height: 30%;
  background: #2D4A22;
  display: flex;
  flex-direction: column;
  align-items: center;

  .devFinance{
    margin-top: 42px;
    display: flex;
    align-items: center;
  }

  .c-cards{
    display: flex;
    margin-top: 104px;
  }

`


export const DevFinanceImg = styled.img``

export const MoneyImg = styled(MdOutlineAttachMoney)`
  width: 25px;
  height: 25px;
  color: #49AA26;
  margin-left: 70px;
  margin-bottom: 6px;

  @media(max-width: 320px){
    display: none;
  }
`