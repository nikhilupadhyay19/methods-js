import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// fetch("https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
//     "x-rapidapi-key": "7b3df382c8msh1669b198bb034c6p12af99jsn730f23632fb2"
//   }
// })
//   .then(response => response.json())
//   .catch(error => error)
//   .then(json => {
//     console.log(json);
//   });
