"use strict";

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

/*---- MOON DATA ----*/
const fetchMoonData = async () => {
  const show = document.querySelector(".modal-content");
  show.innerHTML = "";
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=moon&media_type=image"
    );
    const data = await response.json();
    //console.log("", data);
    let randomIndex = Math.floor(Math.random() * 21);
    const tittle = data.collection.items[randomIndex].data[0].description;
    console.log("tittle of the Moonimage: ", tittle);
    const fetchLink = data.collection.items[randomIndex].href;
    //console.log("link de la imagen: ", fetchLink);
    try {
      const response = await fetch(`${fetchLink}`);
      const data = await response.json();
      //console.log("moondata: ", data);
      const image = data[0];

      //console.log("image :>> ", image);
      const newArticle = document.createElement("article");
      newArticle.innerHTML = `
      <h4>${tittle}</h4>
      <img src="${image}" alt="Keep trying little padawan!"/>
      `;
      show.appendChild(newArticle);

      //displayExoPlanets2(data);
    } catch (error) {
      console.log(error);
    }
    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};

fetchMoonData();

/*---- EARTH DATA ----*/
const fetchEarthData = async () => {
  const show = document.querySelector(".modal-content");
  show.innerHTML = "";
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=earth&media_type=image"
    );
    const data = await response.json();
    //console.log("", data);
    let randomIndex = Math.floor(Math.random() * 21);
    const tittle = data.collection.items[randomIndex].data[0].description;
    console.log("tittle of the Earthimage: ", tittle);
    const fetchLink = data.collection.items[randomIndex].href;
    //console.log("link of the earthImage: ", fetchLink);
    try {
      const response = await fetch(`${fetchLink}`);
      const data = await response.json();
      //console.log("moondata: ", data);
      const image = data[0];

      //console.log("image :>> ", image);
      const newArticle = document.createElement("article");
      newArticle.innerHTML = `
      <h4>${tittle}</h4>
      <img src="${image}" alt="Keep trying little padawan!"/>
      `;
      show.appendChild(newArticle);

      //displayExoPlanets2(data);
    } catch (error) {
      console.log(error);
    }
    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};

fetchEarthData();

/*---- MARS DATA ----*/
const fetchMarsData = async () => {
  const show = document.querySelector(".modal-content");
  show.innerHTML = "";
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=mars+rover+images&media_type=image"
    );
    const data = await response.json();
    //console.log("", data);
    let randomIndex = Math.floor(Math.random() * 21);
    const tittle = data.collection.items[randomIndex].data[0].description;
    console.log("tittle of the Marsimage: ", tittle);
    const fetchLink = data.collection.items[randomIndex].href;
    //console.log("link of the earthImage: ", fetchLink);
    try {
      const response = await fetch(`${fetchLink}`);
      const data = await response.json();
      //console.log("moondata: ", data);
      const image = data[0];

      //console.log("image :>> ", image);
      const newArticle = document.createElement("article");
      newArticle.innerHTML = `
      <h4>${tittle}</h4>
      <img src="${image}" alt="Keep trying little padawan!"/>
      `;
      show.appendChild(newArticle);

      //displayExoPlanets2(data);
    } catch (error) {
      console.log(error);
    }
    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};

fetchMarsData();

/*---- GALAXY DATA ----*/
const fetchGalaxyData = async () => {
  const show = document.querySelector(".modal-content");
  show.innerHTML = "";
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=galaxy&media_type=image"
    );
    const data = await response.json();
    // console.log("", data);
    let randomIndex = Math.floor(Math.random() * 21);
    const tittle = data.collection.items[randomIndex].data[0].description;
    console.log("tittle of the Galaxyimage: ", tittle);
    const fetchLink = data.collection.items[randomIndex].href;
    //console.log("link of the earthImage: ", fetchLink);
    try {
      const response = await fetch(`${fetchLink}`);
      const data = await response.json();
      //console.log("moondata: ", data);
      const image = data[0];

      //console.log("image :>> ", image);
      const newArticle = document.createElement("article");
      newArticle.innerHTML = `
      <h4>${tittle}</h4>
      <img src="${image}" alt="Keep trying little padawan!"/>
      `;
      show.appendChild(newArticle);

      //displayExoPlanets2(data);
    } catch (error) {
      console.log(error);
    }

    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};

//fetchGalaxyData();

/*---- FUNCTION TO FETCH THE IMAGES INSIDE THE FETCH----*/
// async function fetchImages(link) {
//   try {
//     const response = await fetch(`${link}`);
//     const data = await response.json();
//     //console.log("moondata: ", data);
//     const image = data[0];
//     console.log("image :>> ", image);

//     //displayExoPlanets2(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
