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
            'legal advice': 'It\'s important to consult with a qualified attorney for legal advice tailored to your specific situation.',
            'intellectual property': 'Protect your intellectual property by registering trademarks and copyrights.',
            'personal injury': 'If you have suffered a personal injury, consult a personal injury lawyer to explore your legal options.',
            'employment law': 'Employment law covers various aspects of the employer-employee relationship. Consult with an employment attorney for guidance.',
            'constitution of India': 'The Constitution of India is the supreme law of the country, which establishes the framework for the governance and legal system. It defines the fundamental rights and duties of citizens, the structure of government, and the distribution of powers between the central and state governments',

            'criminal': 'Indias criminal laws are primarily defined by the Indian Penal Code (IPC). This code covers a wide range of offenses, including crimes against persons, property, and the state. Other criminal laws include the Code of Criminal Procedure (CrPC) and various special laws for specific offenses',
            
            'civil': 'Civil laws in India include the Indian Contract Act, which governs contracts and agreements, and the Specific Relief Act, which deals with remedies for civil wrongs. The Indian Evidence Act outlines the rules for the admissibility of evidence in legal proceedings',
            
            'family': 'Family law in India encompasses personal laws for different religious communities. For instance, the Hindu Marriage Act, Muslim Personal Law, and Christian Marriage Act govern aspects of marriage and family matters. The Special Marriage Act provides an alternative for inter-religious marriages',
            
            'property': 'Property laws in India are diverse and cover various aspects of land and property ownership. The Transfer of Property Act deals with the transfer of property rights, while the Registration Act governs the registration of documents related to land and property',
            
            'labor': 'India has a complex system of labor laws that regulate employment, wages, working conditions, and labor disputes. Key labor laws include the Industrial Disputes Act, Employees Provident Fund Act, and Minimum Wages Act',
            
            'taxation': 'The taxation system in India is governed by various laws, including the Income Tax Act, Goods and Services Tax (GST), and Customs Act. These laws specify how taxes are assessed, collected, and regulated',
            
            'environmental' : 'India has several environmental laws and regulations aimed at protecting the environment and natural resources. The Environmental Protection Act and Wildlife Protection Act are examples of such laws',
            
            'intellectual property ': 'Intellectual property rights in India are protected by laws such as the Patents Act, Copyright Act, Trademarks Act, and Designs Act. These laws govern patents, copyrights, trademarks, and industrial designs',
            
            'cyber': 'With the growth of the digital age, India has introduced cyber laws to address cybercrimes and online activities. The Information Technology Act deals with electronic transactions, data protection, and cybersecurity.',
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
