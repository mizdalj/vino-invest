import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';

class HttpClient {

    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {

        this.axiosInstance = axios.create({
            baseURL,
            timeout: 5000,
        });
        this.initializeInterceptors();
    }

    initializeInterceptors() {
        this.axiosInstance.interceptors.request.use(
            (config) => {
                const token = window.localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token.replace(/(^"|"$)/g, '')}`;
                }

                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url, config);
            return response.data;
        } catch (error: any) {
            this.handleError(error);
            throw error;
        }
    }

    public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data, config);
            return response.data;
        } catch (error: any) {
            this.handleError(error);
            throw error;
        }
    }

    private handleError(error: AxiosError) {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Response error:', error.response.data);
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Request error:', error.request);
        } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error:', error.message);
        }
    }
}

export default HttpClient;
