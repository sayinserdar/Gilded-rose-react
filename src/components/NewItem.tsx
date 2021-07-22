import React, { useState, useContext } from 'react'
import { Item } from '../gilded-rose/Item';
import styled from 'styled-components'
import { GildedRoseContext } from '../contexts/GildedRoseContext';
import { useToast } from '../hooks/useToast';


const NewItem = () => {
    const [quality, setQuality] = useState<number>(50);
    const [name, setName] = useState<string>('Aged Brie');
    const [sellIn, setSellIn] = useState<number>(10);
    const { items, setItems } = useContext(GildedRoseContext)
    const { openItemAddedToast } = useToast();

    const addItem = (item: Item): void => {
        setItems([...items, item])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem = new Item(name, sellIn, quality);
        addItem(newItem);
        openItemAddedToast(newItem);
    }

    return (
        <FormContainer onSubmit={e => { handleSubmit(e) }}>
            <div>
                <label>Name</label>
                <br />
                <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    name='name'
                    type='text'
                />
            </div>
            <div>
                <label>Quality</label>
                <br />
                <Input
                    value={quality}
                    onChange={e => setQuality(Number(e.target.value))}
                    name='quality'
                    type='number'
                    max={50}
                    min={0}
                />
            </div>
            <div>
                <label>SellIn</label>
                <br />
                <Input
                    value={sellIn}
                    onChange={e => setSellIn(Number(e.target.value))}
                    name='sellIn'
                    type='number'
                />
            </div>
            <CreateButton
                type='submit'
            >Create new item</CreateButton>
        </FormContainer>
    )
}

const Input = styled.input`
  
  border-radius: 10px;
    border: 1px solid rgb(128 128 128 / 30%);
    padding: 8px;
    /* color: rgb(128 128 128 / 90%); */
    margin: 8px;
    width: 90%;
`;

const CreateButton = styled.button`
  background: transparent;
  color: rgb(2,132,199);
  background-color: rgb(224,242,254);
  border: none;
  height: min-content;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
`;
const FormContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
  padding: 16px;
  border: 1px solid rgb(128 128 128 / 30%);
  border-radius: 10px;
  width: 300px;
  box-shadow:0 4px 6px -1px rgb(0 0 0 / 10%),0 2px 4px -1px rgb(0 0 0 / 6%);
`;

export default NewItem
