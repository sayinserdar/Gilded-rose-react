import React, { useEffect } from 'react'
import { useToast } from '../hooks/useToast';

const Toast = ({ message }: { message: string }) => {
    const { toggleToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            toggleToast();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [toggleToast]);
    return (
        <div>
            {message}
        </div>
    )
}

export default Toast
