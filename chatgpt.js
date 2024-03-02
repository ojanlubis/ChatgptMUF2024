document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi elemen UI di sini
});

async function sendMessage(message) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer YOUR_API_KEY_HERE`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            prompt: message,
            temperature: 0.5,
            max_tokens: 100
        })
    });

    const data = await response.json();
    // Tampilkan respons di UI
}

// Fungsi untuk mengirim pesan ke ChatGPT
// Pastikan untuk mengganti 'YOUR_API_KEY_HERE' dengan API Key yang Anda dapatkan dari OpenAI.
