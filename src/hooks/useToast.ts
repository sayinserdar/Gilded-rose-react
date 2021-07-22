import { useContext } from 'react';
import { ToastContext } from '../contexts/ToastContext';

const useToast = () => {
  const toastHelpers = useContext(ToastContext);

  return toastHelpers;
};

export { useToast };
