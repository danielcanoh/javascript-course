'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Primera llamada AJAX
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}M</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(this);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data?.borders;
    console.log(neighbour);

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function() {
      console.log(this);
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    })
  });
};

getCountryAndNeighbour('colombia');
*/

// TODO PROMESAS Y FETCH API
// Forma antigua
/*const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();*/

// Forma moderna: Fetch
/*const request = fetch('https://restcountries.com/v2/name/colombia');

const getCountryData = function (country) {
  // Para manejar el estado "Cumplida" de una Promesa, se utiliza el then
  // fetch(`https://restcountries.com/v2/name/${country}`).then(function(response) {
  //   console.log(response);
  //   return response.json();
  // }).then(function([data]) {
  //   renderCountry(data);
  // });
};
*/
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(([data]) => renderCountry(data));
// };

// getCountryData('colombia');

// Chaining promises
/*const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(([data]) => {
      console.log(data);
      renderCountry(data);
      const neighbour = data.borders?.[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data, 'neighbour');
    });
};

btn.addEventListener('click', function () {
  getCountryData('colombia');
});

// Manejar errores cuando la promesa se rechaza
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // Al lanzar un error manualmente, la promesa se rechaza automáticamente
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => {
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 💣`);
      renderError(`Something went wrong 💣. ${err.message}. Try again!`);
    })
    .finally(() => {
      // El método finally se ejecutará SIEMPRE, sin importar si la promesa se cumple o se rechaza.
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('japan');
});

// getCountryData('xxxxxx');


console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res)
});
console.log('Test end');
*/

// Crear promesas
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise
  .then(response => console.log(response))
  .catch(err => console.error(err));


// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//     }, 1000)
//   }, 1000)
// }, 1000)

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => console.log('3 seconds passed'));


// Promisifying geolocation api

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(response => console.log(response))
  .catch(err => console.error(err));

const whereAmI = function () {
  getPosition()
    .then(response => {
      const { longitude: lng, latitude: lat } = response.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(
        `https://restcountries.com/v2/name/${data.country.toLowerCase()}`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(err.message));
};

btn.addEventListener('click', whereAmI);


// Consumir promesas con Async/Await
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const responseGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!responseGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await responseGeo.json();

    // Country data
    const response = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error('Problem getting country');

    const data = await response.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    renderError(`💥 ${error.message} 💥`);
    return error;
  }
};

(async function () {
  console.log('1: Will get location');
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (error) {
    console.log(`2: ${error.message}`);
  }
  console.log('3: Finished getting location');
})();


const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // Al lanzar un error manualmente, la promesa se rechaza automáticamente
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    // Consumir varias promesas al mismo tiempo
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`)
    ]);
    console.log(data.map(d => d[0].capital));

  } catch (error) {
    console.error(error);
  }
};

get3Countries('colombia', 'japan', 'portugal');
*/

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // Al lanzar un error manualmente, la promesa se rechaza automáticamente
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// Promise.race: devuelve la primera promesa que se cumpla o rechace
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/colombia`),
//     getJSON(`https://restcountries.com/v2/name/japan`),
//     getJSON(`https://restcountries.com/v2/name/usa`),
//   ]);
//   // console.log(res);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/usa`), timeout(1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.log(err));

// Promise.allSettled: devuelve una promesa con información del cumplimiento o rechazo de las promesas pasadas como argumento.
// Promise.allSettled([
//   getJSON(`https://restcountries.com/v2/name/usa`),
//   getJSON(`https://restcountries.com/v2/name/colombiaeretr`),
//   getJSON(`https://restcountries.com/v2/name/japan`),
// ]).then(res => console.log(res));

// Promise.all([
//   getJSON(`https://restcountries.com/v2/name/usa`),
//   getJSON(`https://restcountries.com/v2/name/colombia44`),
//   getJSON(`https://restcountries.com/v2/name/japan`),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// Promise.any: devuelve el resultado de la primera promesa cumplida. Ignora las promesas rechazadas
Promise.any([
  getJSON(`https://restcountries.com/v2/name/usa`),
  getJSON(`https://restcountries.com/v2/name/colombia44`),
  getJSON(`https://restcountries.com/v2/name/japan`),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));
