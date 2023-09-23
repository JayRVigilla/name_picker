import { useState } from 'react';
import { NameItem } from './NameItem/NameItem';
import './App.css';

function App() {
  const [names, setNames] = useState([])
  return (
    <div className="App">

      <div className='not-called'>
        {/* List of names not yet called */}
        <h2>On deck</h2>
        <NameItem firstName={"Joe"} lastName={"blah"} timesCalled={3} />
      </div>
      <div>
        <h2>Middle</h2>
        {/* name of kiddo who is called on */}
        {/* form to add names */}
      </div>
      <div className='called'>
        <h2>Called</h2>
        {/* List of names that have been called */}
      </div>

    </div>
  );
}

export default App;
