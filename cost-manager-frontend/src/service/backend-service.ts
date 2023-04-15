import axios from 'axios'

const API_BASE_URL = 'http://example.com/api/'

export const getSomeData = async (params: any) => {
  const response = await axios.get(`${API_BASE_URL}some-endpoint`, { params });
  return response.data;
}

// 別のAPIエンドポイントについても同様に関数を定義する
