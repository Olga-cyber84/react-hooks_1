import './App.css';
import {useState, useEffect} from 'react';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [info, setInfo] = useState([])
  const [details, setDetails] = useState()
  
  const onHandleSelect = (info) => {
    setInfo(() => info)
  };
  
  useEffect(() => {
    setDetails(() => info.id)
  }, [info.id])

  return (
    <div className="wrapper">
      <List onHandleSelect={onHandleSelect} />      
      {details && <Details info={info} />}
    </div>
  );
}

export default App;


