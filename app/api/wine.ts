import httpclient from '@/app/api/httpClient';

const apiClient = new httpclient(process.env.NEXT_PUBLIC_API_PRODUCT_URL || 'http://localhost:8001');

export async function getWines() {
    const endpoint = '/wines';
    try {
        return await apiClient.get(endpoint);
    } catch (error) {
        return error;
    }
}

export async function getWine(id: string) {
    const endpoint = `/wines/${id}`;

    try {
        return await apiClient.get(endpoint);
    } catch (error) {
        return error;
    }
}
