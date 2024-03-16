import httpclient from '@/app/api/httpClient';
import LoginData from '@/app/types/LoginData';
import UserData from "@/app/types/UserData";

const apiClient = new httpclient(process.env.NEXT_PUBLIC_API_USER_URL || 'http://localhost:8001');

export async function registerUser(userData: UserData) {
  const endpoint = '/register';

  try {
    const response = await apiClient.post(endpoint, userData);
  } catch (error) {
    return error;
  }
}

export async function loginUser(loginData: LoginData): Promise<any>{
  const endpoint = '/login';

  try {
    return await apiClient.post(endpoint, loginData);
  } catch (error) {
    return error;
  }
}

export async function getUserInfo(): Promise<any> {
  const endpoint = '/me';

  try {
    return await apiClient.get(endpoint);
  } catch (error) {
    return error;
  }
}
