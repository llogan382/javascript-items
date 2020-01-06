// Create a list of objects
let Deals = [
    {
        "restaurant": "Moes",
        "deal": "Kids eat free",
        "location": "1744 Battleground Ave, Greensboro, NC 27408, United States",
        "day": "Tuesday",
        "time": "All Day",
        "locationURI": "",
        "iframe": "",
    },
    {
        "restaurant": "Barberitos",
        "deal": "Kids eat for $1.99",
        "location": "301 Pisgah Church Rd, Greensboro, NC 27455",
        "day": "Tuesday",
        "time": "All Day",
    },
    {
        "restaurant": "Zaxby's",
        "deal": "Kids eat free",
        "location": "301 Pisgah Church Rd, Greensboro, NC 27455",
        "day": "Monday",
        "time": "5-8pm",
    },
    {
        "restaurant": "Blue Agave",
        "deal": "Kids eat for $1.99",
        "location": "3900 BATTLEGROUND AVENUE, Greensboro, NC 27410",
        "day": "Friday",
        "time": "5-8pm",
    },
    {
        "restaurant": "Pita Delite",
        "deal": "Kids eat free",
        "location": "617 Friendly Center Rd, Greensboro, NC 27408",
        "day": "Thursday",
        "time": "All Day",
    },
    {
        "restaurant": "O'Charley's",
        "deal": "Kids eat free",
        "location": "4505 Landover Road Greensboro, NC 27407",
        "day": "Thursday",
        "time": "All Day",
    },
    {
        "restaurant": "O'Charley's",
        "deal": "Kids eat free",
        "location": "4505 Landover Road Greensboro, NC 27407",
        "day": "Friday",
        "time": "All Day",
    },

];
const dealDiv = document.querySelector('#dealApp');


function getDayOfWeek() {
    const today = new Date();
    const dayInteger = today.getDay();
    const dayArray = [
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"],
        [7, "Sunday"]
    ];
    const day = dayArray.find(num => num[0] === dayInteger);
    return day[1];
}

const dayOfWeek = getDayOfWeek();


//todo: get location, get map data from google maps api,
var uriString;
const key = 'AIzaSyDtvuBbCAl2SJeyPty3Ba6k9ppKj0HTmUY';
var iframe;
var diurectionsLink;
for (const deal of Deals) {
    uriString = encodeURI(deal.location);
    iframe = `<iframe width="600" height="450" frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/place?q=${uriString}&key=${key}" allowfullscreen></iframe>`;

    if (deal.day === dayOfWeek) {
        dealDiv.innerHTML += `
        <div class="gridItem">For today at
        ${deal.restaurant}, they have a deal: ${deal.deal}</br>
        Their location is: ${deal.location}
        <div class="dealMap"></div>
        </div>
        `;
    } else {
        console.log('sorry, gotta pay full price!');
    }
}
}
in

var uriString;
function toUri(address) {
    uriString = encodeURIComponent(address);
    let iframeUrl = `
        <iframe width= "600" height= "450" frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/place?q=${uriString}&key=AIzaSyDtvuBbCAl2SJeyPty3Ba6k9ppKj0HTmUY" allowfullscreen></iframe>`
    return iframeUrl;
}
//get the current location, and future, and run a func
let currentPosition;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    currentPosition = `${position.coords.latitude}, ${position.coords.longitude} `;
}



getLocation();