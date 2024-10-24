import React, { useEffect, useState } from 'react';
import { getBlockHeight, getTransactionCount } from './api'; // Import the new function

function App() {
    const [blockHeight, setBlockHeight] = useState<number | null>(null); // State for storing the current block height
    const [transactionCount, setTransactionCount] = useState<number | null>(null); // State for storing the current transaction count
    const [date, setDate] = useState<string>(''); // State for storing the current date and time

    useEffect(() => {
        // Fetches the current Bitcoin block height from the backend API
        const fetchBlockHeight = async () => {
            try {
                const height = await getBlockHeight();
                setBlockHeight(height);
            } catch (error) {
                console.error('Failed to fetch block height:', error); // Logs an error if the fetch fails
            }
        };

        // Fetches the current transaction count from the backend API
        const fetchTransactionCount = async () => {
            try {
                const count = await getTransactionCount(); // Call the new API function
                setTransactionCount(count);
            } catch (error) {
                console.error('Failed to fetch transaction count:', error); // Logs an error if the fetch fails
            }
        };

        // Updates the current date and time in real-time
        const updateDate = () => {
            const now = new Date();
            const formattedDate = now.toLocaleString();
            setDate(formattedDate);
        };

        fetchBlockHeight(); // Initial block height fetch
        fetchTransactionCount(); // Initial transaction count fetch
        updateDate(); // Initial date update

        // Refreshes block height and transaction count every 10 seconds and updates date every second
        const intervalId = setInterval(() => {
            fetchBlockHeight();
            fetchTransactionCount(); // Update transaction count
        }, 10000);
        const dateIntervalId = setInterval(updateDate, 1000);

        // Cleanup intervals on component unmount
        return () => {
            clearInterval(intervalId);
            clearInterval(dateIntervalId);
        };
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1>💰 Bitcoin Block Height 💰</h1>
            {blockHeight !== null ? (
                <p
                    style={{
                        fontSize: '48px',
                        color: '#FFD700', // Glowing gold color for block height
                        textShadow: '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFA500', // Enhanced glowing effect
                        animation: 'shine 1.5s infinite', // Animated shining effect
                    }}
                >
                    {blockHeight} 💵
                </p>
            ) : (
                <p>Loading block height...</p>
            )}
            {transactionCount !== null ? (
                <p
                    style={{
                        fontSize: '48px',
                        color: '#FFD700', // Glowing gold color for transaction count
                        textShadow: '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFA500', // Enhanced glowing effect
                        animation: 'shine 1.5s infinite', // Animated shining effect
                    }}
                >
                    Transaction Count: {transactionCount} 💵
                </p>
            ) : (
                <p>Loading transaction count...</p>
            )}
            <p style={{ fontSize: '18px', marginTop: '20px' }}>📅 {date}</p>
            {/* CSS for the shine animation */}
            <style>{`
                @keyframes shine {
                    0% {
                        text-shadow: 0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFA500;
                    }
                    50% {
                        text-shadow: 0 0 40px #FFD700, 0 0 60px #FFA500, 0 0 80px #FFA500;
                    }
                    100% {
                        text-shadow: 0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFA500;
                    }
                }
            `}</style>
        </div>
    );
}

export default App;
