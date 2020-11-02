const apiKey = "orinHFtKbvLxKtP07t6KdHVA6AcakglvUD5VNaJH";

async function getFirstData() {
  try {
    const response = await fetch(
      `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_kepflag=1`
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
