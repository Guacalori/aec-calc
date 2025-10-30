    document.getElementById("searchForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from reloading the page
      
      const query = document.getElementById('search').value.toLowerCase(); // Get search input
      const cards = document.querySelectorAll('.name-providers'); // Get all cards

      // Loop through each card
      cards.forEach(function (card) {
        const providerName = card.querySelector('h4').textContent.toLowerCase(); // Get provider name (h4)

        // If the provider name contains the search query, show the card, otherwise hide it
        if (providerName.includes(query)) {
          card.classList.remove('hidden'); // Show matching card
        } else {
          card.classList.add('hidden'); // Hide non-matching card
        }
      });
    });