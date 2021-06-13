 import {useState, useEffect} from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 const List = (props) => {
    const [list, setList] = useState([]); 
    const [chosen, setItem] = useState(''); 
    useEffect(() => {
        async function fetchData() {
            const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
            const response = await fetch(url);
            console.log(response)
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const news = await response.json();
            // console.log(news)
            setList(() => news)
        }
        fetchData();
        
        return
    }, [])
    const handleClick = (info) => {
        setItem(() => info)
        props.onHandleSelect(info)
    }
    return (
      <>
        <div className="list-group list-custom">
            {list.map(item => 
            <a href="#" className={`list-group-item list-group-item-action ${+chosen.id === +item.id ? "active" : ""}`} key={item.id} id={item.id} onClick={() => handleClick(item)}>{item.name}</a>)}
        </div>      
      </>
    );
  }
  
  export default List