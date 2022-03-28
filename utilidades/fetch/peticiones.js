/********** Peticiones **********/
/** peticiones con fetch */
const loadStarWarsPeople = async () => {
    try {
      const res = await fetch("https://swapi.dev/api/people/1/");
      const data = await res.json();
      console.log(data);
      console.log(data.name);
      const res2 = await fetch("https://swapi.dev/api/people/2/");
      const data2 = await res2.json();
      console.log(data2);
      console.log(data2.name);
    } catch (e) {
      console.log("ERROR!!!", e);
    }
};

// const peticionFetch = document.querySelector("#fetch");
// peticionFetch.addEventListener("click", loadStarWarsPeople);

// setTimeout(loadStarWarsPeople, 3000);

setInterval(loadStarWarsPeople, 2000);