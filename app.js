const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then(response => response.json())
  .then(data => {
    nationFlag(data);
  });
 
function nationFlag(flags) {
  flags.forEach(flag => {
    const countryName = flag.name.common;
    const flagUrl = flag.flags.svg;
    const card =`
      <h1>${countryName}</h1>
      <img src="${flagUrl}">
    `;
    document.body.innerHTML += card;
  });
}