export const API_BASE_URL = 'http://localhost:3001/api';

// Fetch the current Bitcoin block height
export const getBlockHeight = async (): Promise<number> => {
    const response = await fetch(`${API_BASE_URL}/block-height`);
    const data = await response.json();
    return data.blockHeight;
};

// Fetch the current transaction count
export const getTransactionCount = async (): Promise<number> => {
    const response = await fetch(`${API_BASE_URL}/transaction-count`);
    const data = await response.json();
    return data.transactionCount;
};
