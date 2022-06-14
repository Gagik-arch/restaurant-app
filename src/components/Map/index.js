import React, {useEffect} from 'react'
import * as L from "leaflet";
import {useSelector} from "../../store";
import {generateAddress} from '../../utils'
import {useNavigate} from 'react-router-dom';
import locationApi from '../../api/location'

const defaultData = {
    location: {},
    address: ''
}
const mapOptions = {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
    preferCanvas: true
}

const ZOOM = 18
let map, marker, popup;

const Map = () => {
    const navigate = useNavigate()
    const {data, error} = useSelector(state => state.latlng)
    const restaurants = useSelector(state => state.restaurants)

    useEffect(() => {
        const container = L.DomUtil.get('map');
        if (container != null) {
            container._leaflet_id = null;
        }
        map = L.map('map')

    }, [])

    useEffect(() => {
        marker && map.removeLayer(marker); // remove marker
        if (restaurants.data.length) {
            return (() => {
                locationApi.getLatLng(restaurants.data[0].address)
                    .then(res => {
                        marker && map.removeLayer(marker); //
                        defaultData.location = res.results[0].locations[0].latLng
                        defaultData.address = res.results[0].locations[0].street + '|' +
                            res.results[0].providedLocation.location.replace('Armenia ', '')
                        map.setView(Object.values(defaultData.location), ZOOM);
                        marker = L.marker([defaultData.location.lat, defaultData.location.lng]).addTo(map);
                        popup = marker.bindPopup(generateAddress(defaultData.address));
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', mapOptions).addTo(map);
                        marker.on('mouseover', (ev) => ev.target.openPopup());
                        marker.on('mouseout', (ev) => ev.target.closePopup());
                        marker.on('click', (e) => {
                            const id = sessionStorage.getItem('restaurantId')
                            navigate('/current?id=' + id)
                        })
                    })
            })()
        }
    }, [restaurants])

    useEffect(() => {
        if (data) {
            let {location, address} = data

            marker && map.removeLayer(marker); // remove marker
            map.setView(Object.values(location), ZOOM);
            marker = L.marker([location.lat, location.lng]).addTo(map);
            popup = marker.bindPopup(generateAddress(address));

            marker.on('mouseover', (ev) => ev.target.openPopup());
            marker.on('mouseout', (ev) => ev.target.closePopup());
            marker.on('click', (e) => {
                const id = sessionStorage.getItem('restaurantId')
                navigate('/current?id=' + id)
            })
        }
    }, [data])

    if (error) {
        return <div>Map location error</div>
    }

    return null
}
export default Map
