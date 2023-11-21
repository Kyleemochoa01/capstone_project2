"use strict";

window.onload = init;

function init() {
    addMountainsDropdown();
    displayMountains();
}

function addMountainsDropdown() {
    const mountainsDropdown = document.getElementById("mountainsDropdown");

    mountainsArray.forEach(mountain => {
        const option = document.createElement("option");
        option.value = mountain.name;
        option.text = mountain.name;
        mountainsDropdown.appendChild(option);
    });

    let button = document.getElementById("button");
    button.onclick = findMountain;
}

function findMountain() {
    const mountainsDropdown = document.getElementById("mountainsDropdown");
    const selectedMountain = mountainsDropdown.value;

    const selectedMountainData = mountainsArray.find(mountain => mountain.name === selectedMountain);

    let message = "";
    message += `
    <div class="card my-3" style="width:23rem; height:80vh;">
        <div class="card-body">
            <img class="photos for mountains" src="images/${selectedMountainData.img}"></img>
            <h5 class="card-title">${selectedMountainData.name}</h5>
            <p class="card-text">Description: ${selectedMountainData.desc}</p>
            <p class="card-text">Elevation: ${selectedMountainData.elevation}</p>
            <p class="card-text">Effort: ${selectedMountainData.effort}</p>
            <p class="card-text">Coordinates:</p>
            <p class="card-text">Latitude: ${selectedMountainData.coords.lat}</p>
            <p class="card-text">Longitude: ${selectedMountainData.coords.lng}</p>
        </div>
    </div>`;

    document.getElementById("output").innerHTML = message;
}

function displayMountains() {
    let message = "";
    mountainsArray.forEach(mountain => {
        message += `
        <div class="card my-3" style="width: 100%;">
            <div class="card-body">
                <img src="images/${mountain.img}" class="card-img-top" alt="${mountain.name}">
                <h5 class="card-title">${mountain.name}</h5>
                <p class="card-text">Description: ${mountain.desc}</p>
                <p class="card-text">Elevation: ${mountain.elevation}</p>
            </div>
        </div>`;
    });

    document.getElementById("output").innerHTML = message;
}
