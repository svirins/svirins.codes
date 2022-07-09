import { WAKATIME_API_ENDPOINT } from '@/config';

export const getWakaStats = async () => {
  const response = await fetch(WAKATIME_API_ENDPOINT);
  const { data } = await response.json();
  return data;
};