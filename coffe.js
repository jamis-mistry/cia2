fetch('coffe.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const coffeContainer = document.getElementById('coffe-container');
        data.coffe.forEach(coffe => {
          const coffeDiv = document.createElement('div');
          coffeDiv.className = 'bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300';
          coffeDiv.innerHTML = `
            <img src="${coffe.image}" alt="${coffe.alt}" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800">${coffe.title}</h3>
              <h3 class="text-xl font-semibold text-gray-800">${coffe.description}</h3>
              <h3 class="mt-2 text-gray-600">${coffe.ingredients}</h3>
            </div>
          `;
          coffeContainer.appendChild(coffeDiv);
        });
      })
      .catch(error => {
        console.error('Error fetching coffe:', error);
        const coffeContainer = document.getElementById('coffe-container');
        coffeContainer.innerHTML = '<p class="text-center text-red-600">Failed to load coffe. Please try again later.</p>';
      });