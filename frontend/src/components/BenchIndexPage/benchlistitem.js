import { Link } from "react-router-dom";

function BenchListItem({bench}){

    return(
    <Link to={`/benches/${bench.id}`}>
        <li>
            <h3>{bench.title}</h3>
            <figure>
                {bench.description}

                <figcaption style={{margin: "10px"}}>
                    Price: {bench.price}<br/>
                    Seats: {bench.seating}
                </figcaption>
            </figure>
        </li>
    </Link>
    )
}


export default BenchListItem;