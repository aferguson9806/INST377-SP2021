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
  const myPageData = document.querySelector(".content");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit fired");
    console.log(search.value);

    const display = data.filter((record) => search.value === record.zip);
    console.log(display);

    const restaurants = display.slice(0, 5);

    restaurants.forEach((restaurant) => {
      let newLi = document.createElement("li");
      let newDiv = document.createElement("div");

      newLi.classList.add("liElement")

      newDiv.classList.add("restaurants");

      let resDataName = document.createElement("h2");
      let resDataAdd = document.createElement("address");
      let resDataCata = document.createElement("h4");
      let cityHeader = document.createElement("h4");

      let divResName = document.createTextNode(titleCase(restaurant.name));
      let divResAdd = document.createTextNode(restaurant.address_line_1);
      let divResCata = document.createTextNode(titleCase(restaurant.category));
      let cityHeaderContent = document.createTextNode(
        titleCase(restaurant.city)
      );

      resDataName.appendChild(divResName);
      resDataAdd.appendChild(divResAdd);
      resDataCata.appendChild(divResCata);
      cityHeader.appendChild(cityHeaderContent);

      newDiv.appendChild(resDataName);
      newDiv.appendChild(resDataCata);
      newDiv.appendChild(resDataAdd);
      newDiv.appendChild(cityHeader);

      newLi.appendChild(newDiv);

      myPageData.appendChild(newLi);

      L.marker(restaurant.geocoded_column_1.coordinates.reverse()).addTo(
        mapObjectFromFunction
      );
    });
  });

  form.addEventListener("input", async (event) => {
    if (search.value === "") {
      while (myPageData.hasChildNodes()) {
        myPageData.removeChild(myPageData.lastChild);
      }

    }
  });
}

async function windowActions() {
  let map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;
