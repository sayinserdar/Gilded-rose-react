import { createContext, useState } from 'react';
import { ToastContainer } from '../components';
import { Item } from '../gilded-rose/Item';

const ToastContext = createContext<{ openItemAddedToast: (item: Item) => void; openItemDeletedToast: (item: Item) => void; toggleToast: () => void }>({ openItemDeletedToast: () => { }, openItemAddedToast: () => { }, toggleToast: () => { } });

const ToastProvider = ({ children }: any) => {
    const [toast, setToast] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);

    const openItemAddedToast = (item: Item) => {
        setToast(`${item.name} added`);
        setIsActive(true);
    }
    const openItemDeletedToast = (item: Item) => {
        setToast(`${item.name} deleted`);
        setIsActive(true);
    }

    const toggleToast = () => {
        setIsActive(!isActive);
    }
    return (
        <ToastContext.Provider value={{
            openItemAddedToast,
            openItemDeletedToast,
            toggleToast
        }}>
            <ToastContainer isActive={isActive} message={toast} />
            {children}
        </ToastContext.Provider>
    );
}



export { ToastProvider, ToastContext }