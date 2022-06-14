interface IConfigureRequest {
    url?: string,
    method?: string,
    body?: any
}

class Api {
    private readonly URL: string;

    constructor(private baseUrl: string = '') {
        this.URL = baseUrl
    }

    public get<T>(url: string = '', cleanReq?: boolean): Promise<T> {
        return this.configureRequest({url}, cleanReq)
    }

    public post<T>(url: string = '', body: any, cleanReq?: boolean): Promise<T> {
        return this.configureRequest({url, body, method: 'post'}, cleanReq)
    }

    private configureRequest({url = '', method = 'get', body}: IConfigureRequest, cleanReq: boolean = false) {
        const token: string | null = localStorage.getItem('token')
        const headers = new Headers()
        url = cleanReq ? url : (process.env.REACT_APP_REQUEST_URL + this.URL + url)

        const config: RequestInit = {method};

        if (token) headers.set('Authorization', token)

        if (body) {
            if (body.hasOwnProperty('email')) body.email = body.email.toLowerCase()
            if (body instanceof FormData) {
                config.body = body
                headers.set('Content-Type', 'multipart/form-data');
            } else {
                headers.set('Content-Type', 'application/json')
                config.body = JSON.stringify(body)
            }
        }
        config.headers = headers

        return fetch(url, config)
            .then(async (response: Response) => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson ? await response.json() : null;
                if (!response.ok) {
                    const error = data || response.status;
                    return Promise.reject(error);
                }
                return Promise.resolve(data);
            })
    }
}

export default Api
