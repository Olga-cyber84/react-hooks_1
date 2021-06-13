import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Details(props) {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState([])
    console.log(props.info)
    useEffect(() => {        
        const intervalId = setInterval(async () => {
            const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/' + props.info.id +'.json';
            try {
                setLoading(true)
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const news = await response.json();
                setDetails(news);
                clearInterval(intervalId);
            } catch (e) {
                console.error(e);
            } finally {
                console.log("финал")
                setLoading(false)
            }
        }, 1000);
        return () => {
            console.log(intervalId)
        }    
        return
    
},[props])
    return (
        <>
            {loading && (
            <div className="spinner-wrapper">    
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>)}
            {!loading && (<div className="card" >
                <img className="card-img-top" src={details.avatar} alt={details.name} />
                <div className="card-body">
                    <h5 className="card-title">{details.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{`City: ${details.details.city}`}</li>
                    <li className="list-group-item">{`Company: ${details.details.company}`}</li>
                    <li className="list-group-item">{`Position: ${details.details.position}`}</li>
                </ul>
            </div>)}
        </>
    )
}
