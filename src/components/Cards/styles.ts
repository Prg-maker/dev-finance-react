import styled from "styled-components";
import {AiOutlineArrowUp} from 'react-icons/ai'


export const Container = styled.div`
  width: 22rem;
  height: 136px;
  background-color: #FFFFFF;
  border-radius: 5px;
  

  >div{
    display: flex ;
    justify-content: space-between;
    margin: 21px 18px 14px 32px;

  
  }

  @media (max-width: 360px) {
    width: 17rem;
    margin: 0;
  } 

`


export const Title = styled.div`
  color:#363F5F;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &.Saídas{
    color: #969CB2;
  }

`
export const Icon = styled(AiOutlineArrowUp)`
  width: 25px;
  height: 25px;
  border: 2px solid #49AA26;
  border-radius: 50%;
  color: #49AA26;

  &.Saídas{
    color: #E92929;
    border: 2px solid  #E92929;
    transform: rotate(180deg);
  }

`
export const Money = styled.h2`
  margin-left: 32px;
  color:#363F5F;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;

`