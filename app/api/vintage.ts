import httpclient from '@/app/api/httpClient';

const apiClient = new httpclient(process.env.NEXT_PUBLIC_API_PRODUCT_URL || 'http://localhost:8001');

export async function getVintage(id: string) {
    const endpoint = `/vintages/${id}`;

    try {
      return await apiClient.get(endpoint);
    } catch (error) {
      return error;
    }
  }

export async function getTendenciesVintages(orderBy: string ) {
  const endpoint = `/vintages?order_by=${orderBy}&order=desc&page=1&page_size=9`;

  try {
    return await apiClient.get(endpoint);
  } catch (error) {
    return error;
  }
}
