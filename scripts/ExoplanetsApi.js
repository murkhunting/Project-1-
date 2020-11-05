// const fetchExoPlanets = async () => {
//   try {
//     const response = await fetch(
//       "https://images-api.nasa.gov/search?q=moon&media_type=image"
//     );
//     const data = await response.json();
//     console.log("Exoplanets data", data);

//     //displayExoPlanets2(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchExoPlanets();

// async function fetchExoPlanetsImage () {

//     try {
//       const response = await fetch(
//         "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json"
//       );
//       const data = await response.json();
//       console.log("Exoplanets data", data);
//       const image= data[0]
//       console.log('image :>> ', image);

//       //displayExoPlanets2(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchExoPlanetsImage();
const exoplanetList = document.querySelector(".exoplanet-list");

const fetchExoplanetsData = async () => {
  try {
    const response = await fetch(
      "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json"
    );
    const data = await response.json();
    console.log("exoplanet data: ", data);

    for (let i = 0; i <= 4000; i = i + 70) {
      const name = data[i].pl_name;
      const facility = data[i].pl_facility;
      const radio = data[i].pl_radj;
      // console.log("exoplanet name: ", name);
      // console.log("exoplanet facility: ", facility);
      // console.log("exoplanet radio: ", radio);
      const article = document.createElement("article");
      article.innerHTML = `
      <h3>Name: ${name}</h3>
      <h3>Observatory: ${facility}</h3>
      <h3>Radius: ${radio}</h3>
      `;
      exoplanetList.appendChild(article);
    }

    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};

fetchExoplanetsData();
