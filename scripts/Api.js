const apiKey = "orinHFtKbvLxKtP07t6KdHVA6AcakglvUD5VNaJH";
async function getFirstData() {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    console.log("response", response);
    const dataAPI = await response.json();
    /*  dataAPI.forEach(element => {
            const newImg = document.createElement('img')
        }); */
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
getFirstData();
