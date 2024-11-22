import { createRoot } from 'react-dom/client';
import App from '../app/App';
import { BrowserRouter } from 'react-router-dom';
import '../shared/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
