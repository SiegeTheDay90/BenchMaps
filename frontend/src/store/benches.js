import csrfFetch from "./csrf.js";

const GET_BENCHES = "benches/list"
const GET_BENCH = "benches/single"
const ADD_BENCH = "benches/add"


const getBenches = (benches) => ({
    type: GET_BENCHES,
    benches
})

const getBench = (bench) => ({
    type: GET_BENCH,
    bench
})

const addBench = (bench) => ({
    type: ADD_BENCH,
    bench
})

export const fetchBenches = () => async (dispatch) => {
    const response = await fetch('/api/benches');
    const data = await response.json();
    dispatch(getBenches(data));
    return data;
}

export const fetchBench = (benchId) => async (dispatch) => {
    const response = await fetch(`/api/benches/${benchId}`);
    const data = await response.json();
    dispatch(getBench(data));
    return data;
}

export const createBench = (bench) => async (dispatch) => {
    const response = await csrfFetch(
        `/api/benches?title=${bench.title}&description=${bench.description}&price=${bench.price}&seating=${bench.seating}&lat=${bench.lat}&lng=${bench.lng}`, 
        {method: 'POST'});
    const data = await response.json();
    dispatch(addBench(data));
    return data;
}

const benchReducer = (state = {}, action) => {
    switch(action.type){
        case GET_BENCHES:
            return {...state, ...action.benches}
        
        case GET_BENCH:
            return {...state, ...action.bench}

        case ADD_BENCH:
            return {...action.bench}
        default:
            return {}
    }
}

export default benchReducer;