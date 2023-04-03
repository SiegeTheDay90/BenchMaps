import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import * as benchActions from '../../store/benches'
import BenchListItem from "./benchlistitem";



function BenchIndexPage(){
    const dispatch = useDispatch();

    useEffect(() => {dispatch(benchActions.fetchBenches())}, []);

    const benches = useSelector(state => state.benches);

    return(
    <div>
        <h2>Bench Listings</h2>
        <ol>
            {Object.values(benches).map((bench) => (
                <BenchListItem key={bench.id} bench={bench} />
            ))
        }
        </ol>
    </div>
    )
}


export default BenchIndexPage;