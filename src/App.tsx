import { Welcome, Container, NewItem } from './components';
import styled from 'styled-components'
import { GildedRoseProvider } from './contexts/GildedRoseContext';
import { ToastProvider } from './contexts/ToastContext';


function App() {

  return (
    <GildedRoseProvider>
      <ToastProvider>
        <AppContainer>
          <Welcome />
          <Container />
          <NewItem />
        </AppContainer>
      </ToastProvider>
    </GildedRoseProvider>
  );
}

export default App;


const AppContainer = styled.div`
  padding: 2rem;
`;