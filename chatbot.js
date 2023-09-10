document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chat = document.querySelector('.chat');

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const userQuery = userInput.value.trim().toLowerCase(); // Convert input to lowercase for case-insensitive matching

        if (userQuery === '') return;

        appendMessage('user', userQuery);

        // Replace this with a function that matches keywords and provides advice
        const botResponse = getBotResponse(userQuery);
        appendMessage('bot', botResponse);

        userInput.value = '';
    });

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);

        messageDiv.textContent = message;
        chat.appendChild(messageDiv);

        // Scroll to the bottom of the chat
        chat.scrollTop = chat.scrollHeight;
    }

    function getBotResponse(userQuery) {
        // Define keywords and associated advice
        const keywordResponses = {
            'contract': 'When entering into a contract, make sure all terms are clear and agreed upon by all parties.',
            'divorce': 'Divorce proceedings can vary by location. Consult with a family law attorney for guidance.',
            'legal advice': 'Its important to consult with a qualified attorney for legal advice tailored to your specific situation.',
            // Add more keywords and responses as needed
        };

        // Check if any keyword matches the user's query
        for (const keyword in keywordResponses) {
            if (userQuery.includes(keyword)) {
                return keywordResponses[keyword];
            }
        }

        // Return a generic response if no keyword match is found
        return "I'm sorry, I don't have information on that topic. Please consult with a legal expert for specific advice.";
    }
});
