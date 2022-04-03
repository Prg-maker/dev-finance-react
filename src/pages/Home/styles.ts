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


  .wrapperCard{
    width: 100%;
    margin-top: 104px;


    
  }
  .c-cards{
    display: flex;
    justify-content: center;
    margin: 0 25px;





    >div{
      &:not(:first-child){
        margin-left: 1.2rem;
      }
    }
    
    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      >div{
      &:not(:first-child){
        margin:0 ;
      }

      &:not(:last-child){
        margin-bottom: 1.2rem;

      }
     }
    }
    

    @media (max-width: 360px) {
    }
  }

`


export const DevFinanceImg = styled.img`

 
`

export const MoneyImg = styled(MdOutlineAttachMoney)`
  width: 25px;
  height: 25px;
  color: #49AA26;
  margin-left: 70px;
  margin-bottom: 6px;

  @media(max-width: 400px){
    display: none;
  }
`