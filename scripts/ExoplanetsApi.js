const fetchExoPlanets = async () => {
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=moon&media_type=image"
    );
    const data = await response.json();
    console.log("Exoplanets data", data);
    

    //displayExoPlanets2(data);
  } catch (error) {
    console.log(error);
  }
};
fetchExoPlanets();

async function fetchExoPlanetsImage () {
    
    try {
      const response = await fetch(
        "https://images-assets.nasa.gov/image/PIA12235/collection.json"
      );
      const data = await response.json();
      console.log("Exoplanets data", data);
      const image= data[0]
      console.log('image :>> ', image);
  
      //displayExoPlanets2(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchExoPlanetsImage();