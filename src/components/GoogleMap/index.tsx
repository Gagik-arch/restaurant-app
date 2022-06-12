import React, {useEffect, useRef} from 'react'
// import {Status, Wrapper} from "@googlemaps/react-wrapper";
import s from './index.module.css'

// import {IGoogleMap} from 'interfaces'
interface IGoogleMap {
    center?: google.maps.LatLngLiteral;
    zoom?: number;
}


const centerDefault = {
    lat: 40.177200,
    lng: 44.503490
}
//   Needs Api key $300
const GoogleMap = ({
                       center = centerDefault,
                       zoom = 8
                   }: IGoogleMap) => {

    return <div className={s.container} >
        For using GoogleMap service need apiKey.
        {/*<Wrapper apiKey={apiKey} render={render}>*/}
        {/*    <div>ad</div>*/}
        {/*</Wrapper>*/}
    </div>
}
export default GoogleMap
