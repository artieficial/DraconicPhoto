import { createRoot } from 'react-dom/client';

import Navigation from '@header/navigation';
import Banner from '@body/banner';
import Footer from '@footer/footer';

const App = () => {
  return <div>
    <div className="vh-100 d-flex flex-column">
        <Navigation/>
        <Banner/>
    </div>
    <Footer/>
  </div>
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}