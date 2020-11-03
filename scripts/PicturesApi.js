const apiKey = "orinHFtKbvLxKtP07t6KdHVA6AcakglvUD5VNaJH";
const url = "https://api.nasa.gov/planetary/apod?api_key=";

// const fetchNASAData = async () => {
//   try {
//     const response = await fetch(`${url}${apiKey}`);
//     const data = await response.json();
//     console.log("NASA APOD data", data);
//     displayData(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const displayData = (data) => {
//   document.getElementById("title").textContent = data.title;
//   document.getElementById("date").textContent = data.date;
//   document.getElementById("picture").src = data.hdurl;
//   document.getElementById("explanation").textContent = data.explanation;
// };

// fetchNASAData();


/*---- MOON ----*/
const fetchMoonData = async () => {
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=moon&media_type=image"
    );
    const data = await response.json();
    //console.log("", data);
    let randomIndex = Math.floor(Math.random() * 21);
    const tittle = data.collection.items[randomIndex].data[0].description
    console.log("tittle of the image: ", tittle);
    const fetchLink = data.collection.items[randomIndex].href
    console.log("link de la imagen: ", fetchLink)
    

    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};

fetchMoonData();

async function fetchMoonImages() {
  try {
    const response = await fetch(
      "https://images-assets.nasa.gov/image/PIA08207/collection.json"
    );
    const data = await response.json();
    console.log("Exoplanets data", data);
    const image = data[0];
    console.log("image :>> ", image);

    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
}
fetchMoonImages();


/*---- EARTH ----*/
const fetchEarthData = async () => {
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=earth&media_type=image"
    );
    const data = await response.json();
    console.log("", data);

    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};



/*---- MARS ----*/
const fetchMarsData = async () => {
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=mars&media_type=image"
    );
    const data = await response.json();
    console.log("", data);

    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};


/*---- GALAXY ----*/
const fetchGalaxyData = async () => {
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=galaxy&media_type=image"
    );
    const data = await response.json();
    // console.log("", data);
    let randomIndex = Math.floor(Math.random() * 21);
    const fetchLink = data.collection.items[randomIndex].href
    console.log("link de la imagen", fetchLink)

    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};

fetchGalaxyData()