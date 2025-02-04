import fetch from 'node-fetch'; // Falls "type": "module" verwendet wird
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'https://app.pdfgeneratorapi.com/templates';
const API_TOKEN = process.env.516e43ce0396a107889bc64b5773b16ab84e822c672f4a41df5c7752c121a74e;

const fetchTemplates = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${516e43ce0396a107889bc64b5773b16ab84e822c672f4a41df5c7752c121a74e}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Templates:', data);
    } catch (error) {
        console.error('Error fetching templates:', error.message);
    }
};

fetchTemplates();
