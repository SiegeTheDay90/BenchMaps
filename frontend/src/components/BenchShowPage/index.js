import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as benchActions from '../../store/benches';
import { useEffect } from "react";


function BenchShowPage(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const bench = useSelector(state => state.benches[id]);

    useEffect(() => {
        dispatch(benchActions.fetchBench(id))
    }, []);

    if (!bench) return null;
    return(
        <>
            <h2>{bench.title}</h2>
            <figure>
                {bench.description}

                <figcaption style={{margin: "10px"}}>
                    Price: {bench.price}<br/>
                    Seats: {bench.seating}
                </figcaption>
            </figure>
        </>
    )
}


export default BenchShowPage;