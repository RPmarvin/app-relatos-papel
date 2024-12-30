import './App.css';
import { CarritoProvider } from './context/CarritoContext';
import GlobalRouter from './router/GlobalRouter';

function App() {
  return (
    <CarritoProvider>
      <GlobalRouter></GlobalRouter>
    </CarritoProvider>
  );
}

export default App;
