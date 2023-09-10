const apiKey = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';
const apiUrl = 'https://api.data.gov.in/resource/12201e06-4d0f-4e86-901e-3162a5e396e4?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=32';

const lawSearchForm = document.getElementById('law-search-form');
const keywordsInput = document.getElementById('keywords');
const suggestedLawsContainer = document.getElementById('suggested-laws');

lawSearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const keywords = keywordsInput.value;

    // Make a GET request to the API with the API key
    fetch(`${apiUrl}?keywords=${encodeURIComponent(keywords)}`, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Process and display the legal information from the API
        displaySuggestedLaws(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});

function displaySuggestedLaws(laws) {
    suggestedLawsContainer.innerHTML = ''; // Clear previous suggestions

    if (laws.length > 0) {
        laws.forEach(law => {
            const lawItem = document.createElement('div');
            lawItem.classList.add('suggested-law');
            lawItem.textContent = law;
            suggestedLawsContainer.appendChild(lawItem);
        });
    } else {
        const message = document.createElement('p');
        message.textContent = 'No laws found.';
        suggestedLawsContainer.appendChild(message);
    }
}
