import styled from "styled-components";

import {MdOutlineAttachMoney} from 'react-icons/md'

export const Container  = styled.div`
  height: 100%;
  background: #C4C4C4;
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

export const Main = styled.main`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

export const Table = styled.table`
  width: 62.5rem;
  margin:  120px 50px 0 50px;
  display: flex;
  flex-direction: column;

  @media(max-width: 400px){
    display: none;
  }


  >tbody{
    margin-top: 20px;

  }
`

export const Thead = styled.thead`


  >tr{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-style: normal;
   th{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #969CB3;
   }
  }

`

