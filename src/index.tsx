import { createRoot } from 'react-dom/client';

import Navigation from '@header/navigation';
import Placeholder from '@body/banner';

const App = () => {
  return <div className="vh-100 d-flex flex-column">
    <Navigation/>
    <Placeholder/>
  </div>;
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}