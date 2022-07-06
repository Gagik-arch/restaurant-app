import Api from './index.'

const {REACT_APP_MAP_URL, REACT_APP_MAP_KEY} = process.env

class LocationApi extends Api {
    constructor() {
        super(`${REACT_APP_MAP_URL}/address?key=${REACT_APP_MAP_KEY}`,true)
    }

    public getLatLng(address): any {
        return this.get(`&location=` + address, true).then(res => res)
    }
}

const locationApi = new LocationApi()

export default locationApi
