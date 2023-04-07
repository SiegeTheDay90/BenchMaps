import {Wrapper} from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';
import './BenchMap.css';
function BenchMap({benches, markerEventHandlers = {}, mapEventHandlers = {}}) {
    const [map, setMap] = useState(null);
    const mapRef = useRef();
    const markers = useRef({});
    let averageLat;
    let averageLng;
    let mapOptions = {
        center: {
            lat: 40.7,
            lng: 286
        },
        zoom: 11
    }

    useEffect(() => {
        if(benches[0]){
            averageLat = Object.values(benches).reduce((sum, bench) => {
                return sum + bench.lat
            }, 0)/Object.values(benches).length
            averageLng = Object.values(benches).reduce((sum, bench) => (
                sum + bench.lng
            ), 0)/Object.values(benches).length
            mapOptions = {
                ...mapOptions,
                center: {
                    lat: averageLat ? averageLat : 40.7,
                    lng: averageLng ? averageLng : 286
                },
                zoom: 11
            }
        }
        if(!map){
            setMap(
                new window.google.maps.Map(mapRef.current, mapOptions)
            )
        }
    }, [benches, map])

    useEffect(() => {
        benches?.forEach((bench) => {
            if(!markers.current[bench.id]){
                markers.current[bench.id] = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(bench.lat, bench.lng),
                map
                })
                Object.entries(markerEventHandlers)?.forEach(([key, cbCreator]) => {
                    markers.current[bench.id].addListener(key, cbCreator(bench))
                })
            }
        })

        return () => markers.current = {}
    })

    useEffect(() => {
        Object.entries(mapEventHandlers)?.forEach(([key, callback]) => {
            window.google.maps.event.addListener(map, key, callback)
        })
    }, [map])

    return(
        <div ref={mapRef} id="map">
        </div>
    )
}

function BenchMapWrapper({mapOptions = {}, benches, markerEventHandlers = {}, mapEventHandlers = {}}) {
    return (
    <Wrapper apiKey={`${process.env.REACT_APP_MAPS_API_KEY}`} >
        <BenchMap mapOptions={mapOptions} benches={benches} markerEventHandlers={markerEventHandlers} mapEventHandlers={mapEventHandlers} />
    </Wrapper>
    )
}


export default BenchMapWrapper;