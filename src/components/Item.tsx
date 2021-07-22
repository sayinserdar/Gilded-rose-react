import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Close } from '../svg/close.svg';


interface ItemProps {
  name: string,
  quality: number,
  sellIn: number,
  handleRemove: () => void
}

const Item = ({ name, quality, sellIn, handleRemove }: ItemProps) => {
  return (
    <ItemContainer quality={quality}>
      <RemoveButton onClick={handleRemove}>
        <Close />
      </RemoveButton>
      <Name>{name}</Name>
      <PropertyContainer>
        <SubContainer>
          <label>Quality</label>
          <Quality>{quality}</Quality>
        </SubContainer>
        <SubContainer>
          <label>SellIn</label>
          <SellIn>{sellIn}</SellIn>
        </SubContainer>
      </PropertyContainer>

    </ItemContainer>
  )
}

export default Item

const Name = styled.p`
  font-size: 15px;
  padding: 12px 0 0 0;
`;

const Quality = styled.p`
margin: 0;
font-size: 12px;
font-weight: 400;
color: black;
`;
const SellIn = styled.p`
margin: 0;
font-size: 12px;
font-weight: 400;
color: black;

`;

const SubContainer = styled.div`
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: rgb(117,114,128);
`;

const PropertyContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;

interface ItemContainerProps {
  quality: number;
}

const ItemContainer = styled.div<ItemContainerProps>`
position: relative;
  border-radius: 10px;
  min-height: 96px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  box-shadow:0 4px 6px -1px rgb(0 0 0 / 10%),0 2px 4px -1px rgb(0 0 0 / 6%);
  padding-bottom: 36px;
  border: 2px solid ${props => props.quality > 0 ? 'rgb(0,0,255,0.1)' : 'rgba(255,0,0,0.1)'};
  &:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%),0 4px 6px -2px rgb(0 0 0 / 5%);
  }
`;

const RemoveButton = styled.button`
position: absolute;
top: 6px;
right: 6px;
  background: transparent;
  color: rgb(2,132,199);
  border: none;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #06a9fa;
  }
`;