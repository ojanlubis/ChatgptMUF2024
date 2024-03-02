async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseContainer = document.getElementById('response');

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
            prompt: userInput,
            temperature: 0.5,
            max_tokens: 100
        })
    });

    const data = await response.json();

    responseContainer.innerHTML = `<p>${data.choices[0].text}</p>`;
}
