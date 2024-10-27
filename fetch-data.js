// Function to fetch user data asynchronously
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Select the data container

    try {
        const response = await fetch(apiUrl); // Fetch data from API
        const users = await response.json(); // Convert response to JSON

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a user list
        const userList = document.createElement('ul'); // Create <ul> element

        // Loop through the users array
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create <li> for each user
            listItem.textContent = user.name; // Set the text content to user's name
            userList.appendChild(listItem); // Append <li> to <ul>
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear the loading message on error
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'; // Display error message
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
