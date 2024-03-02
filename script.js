const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        appendMessage('You: ' + message);
        getChatGPTResponse(message);
        userInput.value = '';
    }
}

async function getChatGPTResponse(message) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({
                model: 'text-davinci-003', // You can choose another model if needed
                messages: [
                    { role: 'user', content: message }
                ]
            })
        });

        const data = await response.json();
        const chatGPTResponse = data.choices[0].message.content;
        appendMessage('ChatGPT: ' + chatGPTResponse);
    } catch (error) {
        console.error('Error:', error);
    }
}

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
