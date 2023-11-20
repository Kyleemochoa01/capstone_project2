document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("category-select");

    categorySelect.addEventListener("change", filterParks);

    displayParks(Parks);
});

function filterParks() {
    const category = document.getElementById("category-select").value.toLowerCase();

    let filteredParks = Parks;

    if (category !== "show all") {
        filteredParks = Parks.filter(p => p.category.toLowerCase() === category);
    }

    displayParks(filteredParks);
}

function displayParks(parks) {
    const parksContainer = document.querySelector("#content");
    parksContainer.innerHTML = "";

    parks.forEach(park => {
        displayPark(park, parksContainer);
    });
}

function displayPark(park, parentDiv) {
    const parkDiv = document.createElement("div");
    parkDiv.classList.add("park");
    parkDiv.id = "park-" + park.parkId;
    parentDiv.appendChild(parkDiv);

    addParkHeader(park, parkDiv);
    addImageRow(park, parkDiv);
}

function addParkHeader(park, parkDiv) {
    const parkInfoDiv = document.createElement("div");
    parkDiv.appendChild(parkInfoDiv);

    const parkHeader = document.createElement("h4");
    parkHeader.innerText = park.name;
    parkInfoDiv.appendChild(parkHeader);
}

function addImageRow(park, parent) {
    const imageRow = document.createElement("div");
    imageRow.classList.add("photo");
    parent.appendChild(imageRow);

    const img = document.createElement("img");
    img.src = "images/products/" + park.imageUrl;
    imageRow.appendChild(img);

    const price = document.createElement("h4");
    price.classList.add("price");
    price.innerText = `$${park.price}`;
    imageRow.appendChild(price);
}
