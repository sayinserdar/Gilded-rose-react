import { createContext, useState } from "react";
import { initialState } from '../data';
import { Item } from '../gilded-rose/Item';


const GildedRoseContext = createContext<{ items: Array<Item>, setItems: React.Dispatch<React.SetStateAction<Item[]>> }>({ items: [], setItems: () => { } })

const GildedRoseProvider = ({ children }: any) => {

    const [items, setItems] = useState<Array<Item>>(initialState)
    const val = { items, setItems }
    return (
        <GildedRoseContext.Provider value={val}>
            {children}
        </GildedRoseContext.Provider >
    )

}
export { GildedRoseProvider, GildedRoseContext };