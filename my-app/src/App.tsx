import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AnimatedRoutes } from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <Navigation />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
