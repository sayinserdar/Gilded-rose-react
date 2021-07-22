
import { useState, useContext } from 'react';
import type { Item } from '../gilded-rose/Item';
import { updateQuality } from '../gilded-rose/utils'
import { Item as GildedRoseItem } from './index';
import styled from 'styled-components';
import { GildedRoseContext } from '../contexts/GildedRoseContext';
import { useToast } from '../hooks/useToast';

const Container = () => {
    const { items, setItems } = useContext(GildedRoseContext)
    const { openItemDeletedToast } = useToast();

    const [days, setDays] = useState(0)

    const updateItems = () => {
        setDays(days + 1);
        setItems(updateQuality(items));
    }
    const handleRemove = (item: Item, i: number): void => {

        const remainingItems = items.filter((item: Item, index: number) => index !== i)
        setItems([...remainingItems])
        openItemDeletedToast(item)
    }
    return (
        <Wrapper>
            <HeaderContainer>
                <DayCounter>{days} days passed</DayCounter>
                <UpdateItemsButton onClick={updateItems}>Update Quality</UpdateItemsButton>
            </HeaderContainer>
            <ItemTitle>Current Items</ItemTitle>
            <ItemsContainer>
                {items.map((item: Item, i: number) => <GildedRoseItem handleRemove={() => handleRemove(item, i)} name={item.name} quality={item.quality} sellIn={item.sellIn} key={i}></GildedRoseItem>)}
            </ItemsContainer>

        </Wrapper>
    )
}

export default Container

const ItemsContainer = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
  margin-bottom: 2rem;
`;
const ItemTitle = styled.h3`
    margin: 8px 0;
`;
const UpdateItemsButton = styled.button`
 background: transparent;
  color: rgb(224,242,254);
  background-color: rgb(2,132,199);
  border: none;
  height: min-content;
  padding: 8px;
  font-weight: 600;
  margin: 12px;
  border-radius: 10px;
  cursor: pointer;
  width: 120px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const DayCounter = styled.h2``;

const HeaderContainer = styled.section`
display: flex;
align-items: center;
`