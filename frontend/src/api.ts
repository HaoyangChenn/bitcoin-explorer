// api.ts
export const API_BASE_URL = 'http://localhost:3001/api';

export const getBlockHeight = async (): Promise<number> => {
    const response = await fetch(`${API_BASE_URL}/block-height`);
    const data = await response.json();
    return data.blockHeight;
};
