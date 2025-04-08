const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('country-inp');
const result = document.getElementById('result');

searchBtn.addEventListener('click', () => {
    let countryName = searchInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response) => response.json()).then((data) => {
        // console.log(data[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].capital[0]);
        // console.log(data[0].name.common);
        // console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name);
        // console.log(Object.values(data[0].languages).toString().split(',').join(', '));
        // console.log(data[0].population);

        result.innerHTML = `
        <img src="${data[0].flags.svg}" alt="flag" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital: <span>${data[0].capital[0]}</span></h4>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent: <span>${data[0].continents[0]}</span></h4>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency: <span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)[0]].name}</span></h4>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Languages: <span>${Object.values(data[0].languages).toString().split(',').join(', ')}</span></h4>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population: <span>${data[0].population}</span></h4>
            </div>
        </div>
        `;
    })

    .catch(() => {
        if (countryName.length == 0) {
            result.innerHTML = `
            <h3>The input field cannot be empty</h3>
            `;
        }
        else {
            result.innerHTML = `
            <h3>Please enter a valid country name</h3>
            `;
        }
    });
    
});