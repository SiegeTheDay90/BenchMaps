import {GoogleMap, Marker, LoadScript} from '@react-google-maps/api';
import { useEffect } from 'react';
import React from 'react';
import './BenchMap.css';


function BenchMap({benches}) {

    let averageLat;
    let averageLng;

    let mapOptions = {
        center: {
            lat: 40.7,
            lng: 286
        },
        zoom: 11,
        containerStyle: {
            height: 'calc(100vh - 20px)',
            // width: '50vw',
        }
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
    }, [benches])

    // const addMarkers = () => {
    //     benches?.forEach((bench) => {
    //         if(!markers.current[bench.id]){
    //             markers.current[bench.id] = new window.google.maps.Marker({
    //             position: new window.google.maps.LatLng(bench.lat, bench.lng),
    //             map
    //             })
    //             Object.entries(markerEventHandlers)?.forEach(([key, cbCreator]) => {
    //                 markers.current[bench.id].addListener(key, cbCreator(bench))
    //             })
    //         }
    //     })
    // }

    // useEffect(() => {
    //     Object.entries(mapEventHandlers)?.forEach(([key, callback]) => {
    //         window.google.maps.event.addListener(map, key, callback)
    //     })
    // }, [map])

    // const onLoad = React.useCallback(addMarkers)

    return(
        <LoadScript googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`} >
            <div id="map">
            <GoogleMap
                mapContainerStyle={mapOptions.containerStyle}
                center={mapOptions.center}
                zoom={mapOptions.zoom}
            >
                {benches.map((bench, index) => (
                    <Marker 
                        key={index}
                        position={{lat: bench.lat, lng: bench.lng}}
                    />
                ))}
            </GoogleMap></div>
        </LoadScript>
    )
}

export default BenchMap;