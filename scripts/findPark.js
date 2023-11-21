document.addEventListener('DOMContentLoaded', () => {
    stateDropdown();
    parkTypeDropdown();
    parkFilter();

    let stateSelect = document.querySelector('#state-dropdown');
    stateSelect.addEventListener('change', parkFilter);

    let parkTypeSelect = document.querySelector('#parkTypeDropdown');
    parkTypeSelect.addEventListener('change', parkFilter);
});

let filteredParks; // Declare filteredParks as a global variable

function parkTypeDropdown() {
    const parkTypeDropdown = document.getElementById("parkTypeDropdown");

    if (!parkTypeDropdown) {
        console.error('Park type dropdown not found.');
        return;
    }

    parkTypesArray.forEach(type => {
        const option = new Option(type);
        parkTypeDropdown.add(option);
    });
}

function stateDropdown() {
    const stateDropdown = document.querySelector('#state-dropdown');

    if (!stateDropdown) {
        console.error('State dropdown not found.');
        return;
    }

    locationsArray.forEach(state => {
        const option = new Option(state);
        stateDropdown.add(option);
    });
}

function parkFilter() {
    // getting the values from the dropdowns
    const stateSelected = document.querySelector('#state-dropdown').value;
    const parkTypeSelected = document.querySelector('#parkTypeDropdown').value;

    // logging the data gathered
    console.log(`Selected park type: ${parkTypeSelected}`);
    console.log(`Selected state: ${stateSelected}`);

    // filtering the parks based on the dropdown values
    filteredParks = nationalParksArray.slice(); // Create a copy to avoid modifying the original array

    if (stateSelected !== 'showAll') {
        filteredParks = filteredParks.filter(park => park.State === stateSelected);
    }
    if (parkTypeSelected !== 'showAll') {
        filteredParks = filteredParks.filter(park => park.LocationName.includes(parkTypeSelected));
    }

    console.log(filteredParks);
    displayParks(filteredParks);
}

function displayParks(filteredParks) {
    const parksContain = document.querySelector('#content');
    parksContain.classList.add("text-center"); // styling the container

    parksContain.innerHTML = ''; // clearing the container

    filteredParks.forEach(parkFilter => {
        displayPark(parkFilter, parksContain);
    });
}

function displayPark(parkFilter, parksContain) {
    const parkCard = document.createElement('div'); // creating the card
    parkCard.classList.add('card'); // styling the card
    parkCard.id = parkFilter.LocationID; // setting the card id to the park id

    parksContain.appendChild(parkCard); // adding the card to the container

    // creating the card body
    const parkCardBody = document.createElement('div');
    parkCardBody.classList.add('card-body');
    parkCard.appendChild(parkCardBody);

    // setting the park name
    const parkName = document.createElement('h5');
    parkName.classList.add('card-title');
    parkName.innerText = parkFilter.LocationName;
    parkCardBody.appendChild(parkName);

    // setting the park location
    const parkLocation = document.createElement('h6');
    parkLocation.classList.add('card-subtitle');
    parkLocation.innerText = parkFilter.State;
    parkCardBody.appendChild(parkLocation);

    // setting park link
    if (parkFilter.Visit) {
        const parkLink = document.createElement('a');
        parkLink.classList.add('card-link');
        parkLink.href = parkFilter.Visit;
        parkLink.innerText = 'Visit Website';
        parkCardBody.appendChild(parkLink);
    }

    // setting the park button
    const parkButton = document.createElement('button');
    parkButton.classList.add('btn', 'btn-primary', 'text-center', 'm-4');
    parkButton.innerText = 'Add to Favorites';

    parkButton.addEventListener('click', () => {
        addFavorite(parkFilter.LocationID);
    });

    parkCardBody.appendChild(parkButton);
}
