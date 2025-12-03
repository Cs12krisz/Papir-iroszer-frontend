import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetItems = ({items}) => {

let elemek = [];

for (let key in items.data) {
    let item = items.data[key]
    elemek.push(item)
    
    }
    console.log(elemek)
    return(
    <>
    <div className="card-container">
        {elemek.map((item, index) => (
            <div className="card" key={index}>
                <div className="card-body">
                    <h1>
                        {item.name}
                    </h1>
                    <h2>
                        {item.price} Ft
                    </h2>
                    <br/>
                    <Link to="/">Részletek</Link>
                </div>
            </div>
        ))}
    </div>
    </>
    )
};

export function Items() {
    const [adatok, setAdatok] = useState([])

    useEffect(() => {
        fetch("http://192.168.50.49:3005/items")
        .then((response) => (response.ok ? response.json() : []))
        .then((tartalom) => setAdatok(tartalom))
    }, []);


    return(
    <>
        <h1>Eszközök</h1>
        <GetItems items={adatok}/>
    </>
    );
}
    
