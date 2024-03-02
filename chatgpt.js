// WARNING: Jangan pernah menyimpan API Key Anda langsung di kode klien dalam produksi!
const OPENAI_API_KEY = 'your_openai_api_key_here';

async function sendToChatGPT(message) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${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}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: message,
            temperature: 0.7,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].text.trim();
}

// Contoh penggunaan:
document.getElementById('chat-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message) {
        displayMessage(message, 'user');
        try {
            const botResponse = await sendToChatGPT(message);
            displayMessage(botResponse, 'bot');
        } catch (error) {
            console.error('Error:', error);
            displayMessage('Maaf, terjadi kesalahan saat berkomunikasi dengan ChatGPT.', 'bot');
        }
    }
    input.value = ''; // Bersihkan input setelah dikirim
});

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span class="${sender}">${sender === 'user' ? 'Anda' : 'ChatGPT'}: </span>${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll ke pesan terbaru
}
