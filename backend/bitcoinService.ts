// bitcoinService.ts
import axios from 'axios';

export const getBlockHeight = async (): Promise<number> => {
    const rpcUser = '123';
    const rpcPassword = '123';
    const url = `http://localhost:8332/`;

    try {
        const response = await axios.post(
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
        return response.data.result;
    } catch (error) {
        console.error('Error fetching block height:', error);
        throw error;
    }
};
