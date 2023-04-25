import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';

import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
      </Wrapper>
      <Wrapper>
        <Card />
      </Wrapper>
    </div>
  );
}

export default App;
