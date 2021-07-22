
import styled from 'styled-components';
import { Toast } from './index'
import ReactDOM from 'react-dom';

const ToastContainer = ({ message, isActive }: { message: string, isActive: boolean }) => {
  return ReactDOM.createPortal(
    <>
      {
        isActive ?
          <ToastWrapper>
            < Toast message={message} />
          </ToastWrapper >
          : null
      }
    </>
    ,
    document.body);
}

const ToastWrapper = styled.div`
  position: fixed;
  right: 12px;
  bottom: 12px;
  width: 224px;
  height: 64px;
  padding: 16px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  border: 1px solid rgb(128 128 128 / 30%);
  border-radius: 10px;
`;

export default ToastContainer
