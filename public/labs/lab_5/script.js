function titleCase(phrase) {
  const to_combine = [];
  phrase = phrase.toLowerCase();
  const words = phrase.split(" ");
  words.forEach((word) => {
    const new_word =
      word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
    to_combine.push(new_word);
  });
  return to_combine.join(" ");
}

function mapInit() {
  // follow the Leaflet Getting Started tutorial here

  let mymap = L.map("mapid").setView([38.99, -76.94], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiYWZlcmd1czEiLCJhIjoiY2ttMXhpemg0MTdjYTJ1bzZidTU0cHdmciJ9.a0P5pPBwcxOd9W5GYMO2Xw",
    }
  ).addTo(mymap);
  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers

  const form = document.querySelector(".userform");
  const search = document.querySelector("#zipcity");

  const request = await fetch("/api");
  const data = await request.json();
  const myPageData = document.querySelector("#content");

  search.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit fired");

    const display = data.filter((record) => {
      record.city.toUpperCase().includes(search.value.toUpperCase());
    });
  });
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;
