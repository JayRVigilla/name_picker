import { useState } from 'react';
import { NameItem } from './Components/NameItem/NameItem';
import { v4 as uuid } from "uuid";
import { pickRandomNumber } from './utils/pickRandomNumber';
import './App.css';
// import * as fs from "fs-react"

function App() {
  const [uncalled, setUncalled] = useState([]);
  const [called, setCalled] = useState([]);
  const [speaker, setSpeaker] = useState(undefined);

  const pickNewName = () => {
    if (!uncalled.length) {
      setUncalled([...called, speaker])
      setCalled([])
      setSpeaker(undefined)
      return
    }

    if (speaker) {
      setCalled([...called, speaker])
    }


    // select random index from a given length
    // const index = Math.floor(Math.random() * uncalled.length);
    const index = pickRandomNumber(uncalled.length);

    // remove selected name
    const uncalledCopy = [...uncalled]
    // let __ = uncalledCopy.splice(index, 1)
    uncalledCopy.splice(index, 1)
    setUncalled(uncalledCopy)

    const selected = uncalled[index]
    // that index from uncalled becomes speaker
    setSpeaker(selected)


  }

  const addName = (event) => {
    const inputValue = document.querySelector("#newName").value
    if (!inputValue){return}
    setUncalled([...uncalled, inputValue])
    document.querySelector("#newName").value = ''
  }

  const removeName = ( index) => {
    const uncalledCopy = [...uncalled]
    // let __ = uncalledCopy.splice(index, 1)
    uncalledCopy.splice(index, 1)
    setUncalled(uncalledCopy)
  }

  const getFromFile = () => {
    const filePath = document.querySelector("#filePath").value
    console.log(filePath)
    // fs.readFile(filePath, 'utf8', (err, data) => console.log(data) )
}

  return (
    <div className="App">

      <div className='not-called'>
        {/* List of uncalled not yet called */}
        <h2>On deck</h2>
        <ul className='list'>
          {uncalled.map((name, index) => {
            return <NameItem name={name} key={uuid()} isDeletable={true} removeName={()=>removeName(index)} />
          })}
        </ul>
      </div>

      <div className='speaker'>
        <h2>Speaker</h2>
        {/* name of kiddo who is called on */}
        <ul>
          <NameItem name={speaker ?? " ¯\\_(ツ)_/¯"} key={uuid()} />
        </ul>
        <button onClick={pickNewName}>Pick new Speaker</button>
        <div>
          <input type="text" name="newName" id="newName" tabIndex={0} />
          <button onClick={addName}>Add</button>
        </div>
        {/* creates selector, need to get value */}
        <input type="file" webkitdirectory directory accept='.txt, .doc, .docx, .rtf' id="filePath"/>
          <button onClick={getFromFile}>Add from file</button>
      </div>

      <div className='called'>
        <h2>Called</h2>
        {/* List of uncalled that have been called */}
        <ul className='list'>
          {called.map((name) => {
            return <NameItem name={name} key={uuid()} />
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
