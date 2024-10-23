// database.ts
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database;

export const initDb = async () => {
    db = await open({
        filename: './blockchain.db',
        driver: sqlite3.Database,
    });

    await db.run(
        'CREATE TABLE IF NOT EXISTS block_heights (id INTEGER PRIMARY KEY, height INTEGER, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)'
    );
    await db.run(
        'CREATE TABLE IF NOT EXISTS transaction_counts (id INTEGER PRIMARY KEY, count INTEGER, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)' // New table for transaction counts
    );
};

export const saveBlockHeight = async (height: number) => {
    await db.run('INSERT INTO block_heights (height) VALUES (?)', height);
};

export const getLatestBlockHeight = async (): Promise<number> => {
    const row = await db.get<{ height: number }>('SELECT height FROM block_heights ORDER BY timestamp DESC LIMIT 1');
    return row?.height ?? 0;
};

// Add these functions for transaction counts
export const saveTransactionCount = async (count: number) => {
    await db.run('INSERT INTO transaction_counts (count) VALUES (?)', count);
};

export const getLatestTransactionCount = async (): Promise<number> => {
    const row = await db.get<{ count: number }>('SELECT count FROM transaction_counts ORDER BY timestamp DESC LIMIT 1');
    return row?.count ?? 0;
};
