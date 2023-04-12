import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import Tables from './components/pages/Tables/Tables';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="table/:id" element={<Tables />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
