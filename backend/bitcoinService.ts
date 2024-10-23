import axios from 'axios';

// 定义 JSON-RPC 响应的类型
interface RpcResponse<T> {
    result: T;
    error: any; // 根据 API 的实际响应结构，可以详细定义
    id: string;
}

// Function to get the current Bitcoin block height
export const getBlockHeight = async (): Promise<number> => {
    const rpcUser = '123';
    const rpcPassword = '123';
    const url = `http://localhost:8332/`;

    try {
        const response = await axios.post<RpcResponse<number>>(
            url,
            {
                jsonrpc: '1.0',
                id: 'curltest',
                method: 'getblockcount',
                params: [],
            },
            {
                auth: {
                    username: rpcUser,
                    password: rpcPassword,
                },
            }
        );

        // 确保结果存在并且是数字
        if (response.data && response.data.result !== undefined) {
            return response.data.result;
        } else {
            throw new Error('Invalid response structure');
        }
    } catch (error) {
        console.error('Error fetching block height:', error);
        throw error;
    }
};

// Function to get the current Bitcoin transaction count
export const getTransactionCount = async (): Promise<number> => {
    const rpcUser = '123';
    const rpcPassword = '123';
    const url = `http://localhost:8332/`;

    try {
        const response = await axios.post<RpcResponse<string[]>>(
            url,
            {
                jsonrpc: '1.0',
                id: 'curltest',
                method: 'getrawmempool', // Method to get the transaction count in the mempool
                params: [],
            },
            {
                auth: {
                    username: rpcUser,
                    password: rpcPassword,
                },
            }
        );

        // 确保结果存在并且是数组
        if (response.data && response.data.result) {
            return response.data.result.length; // Return the length of the transaction array
        } else {
            throw new Error('Invalid response structure');
        }
    } catch (error) {
        console.error('Error fetching transaction count:', error);
        throw error;
    }
};
