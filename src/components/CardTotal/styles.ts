import styled from "styled-components";

import {MdOutlineAttachMoney} from 'react-icons/md'

export const Container = styled.div`
  width: 352px;
  height: 136px;
  background-color: #49AA26;
  margin-left: 32px;  
  border-radius: 5px;
  

  >div{
    display: flex ;
    justify-content: space-between;
    margin: 21px 18px 14px 32px;
  }

`


export const Title = styled.div`
  color:#fff;
  font-weight: 400;
  font-size: 16px;


`
export const Icon = styled(MdOutlineAttachMoney)`
  width: 25px;
  height: 25px;
  color: #fff;


`
export const Money = styled.h2`
  margin-left: 32px;
  color:#fff;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;

`