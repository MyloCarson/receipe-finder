import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

type MethodType = 'POST' | 'PATCH' | 'DELETE' | 'GET' | 'PUT';
type K = (url: string, data?: any | undefined, config?: AxiosRequestConfig<any>) => Promise<any>;

class HttpFactory {
    private methods: Record<MethodType, K>;

    constructor(axios: AxiosInstance) {
        this.methods = {
            POST: axios.post,
            PATCH: axios.patch,
            GET: axios.get,
            DELETE: axios.delete,
            PUT: axios.put
        };
    }

    private getMethod(methodName: MethodType) {
        return this.methods[methodName];
    }

    protected async call<T>(url: string, method: MethodType, data?: object, options?: object) {
        const axios$ = this.getMethod(method);
        const res: AxiosPromise<T> = await axios$(url, data, options);
        return res;
    }
}

export default HttpFactory