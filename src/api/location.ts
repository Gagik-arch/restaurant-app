import Api from './index.'

const {REACT_APP_MAP_URL, REACT_APP_MAP_KEY} = process.env

class LocationApi extends Api {
    constructor() {
        super('')
    }

    public getLatLng(address): any {
        const url = REACT_APP_MAP_URL + `/address?key=${REACT_APP_MAP_KEY}&location=` + address
        return this.get(url, true).then(res => res)
    }
}

const locationApi = new LocationApi()

export default locationApi
