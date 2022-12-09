const buttonSearch = document.querySelector('#searchFilm');
const input = document.querySelector("#film");
const body = document.querySelector('body');
buttonSearch.addEventListener("click", function(){
    let search = input.value;
    const divSearch = document.querySelector(".search");
    if (divSearch)
    {
        body.removeChild(divSearch);
    }
    if (search)
    {
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=f6e256e1&`)
          .then(response => response.json())
          .then(movies =>{
           
            afficherFilms(movies);
          })  
}
});

function afficherFilms(data)
{   
    console.log(data.Search) 
    
   
    let div = document.createElement("div");
    div.classList.add("search");
    div.style.display = "flex";
    div.style.flexWrap = "wrap";
    data.Search.forEach(movie => {
        let divFilm = document.createElement("div");
       
        divFilm.classList.add("film");
        divFilm.style.border = "dashed black 1px";
        divFilm.style.margin = "0.5em";
        let divLink = document.createElement("a");
        let ul = document.createElement("ul");
        ul.style.listStyle = "none";
        ul.style.display = "flex";
        ul.style.flexWrap = "wrap";
        ul.style.flexDirection = 'column';
        ul.style.alignItems = "center";
        ul.style.padding = "0";
        ul.style.margin = "0.5em";
        
        
        let liTitre = document.createElement("li")
        liTitre.innerHTML = `Titre : ${movie.Title}`;
        ul.appendChild(liTitre);
        let divInfos = document.createElement("div");
        divInfos.style.display = "flex";
        divInfos.style.width = "100%";
        divInfos.style.justifyContent = "space-around";

        let liAnnee =  document.createElement("p")
        liAnnee.innerHTML =  `Année : ${movie.Year}`;
        divInfos.appendChild(liAnnee);

        let liType =  document.createElement("p")
        liType.innerHTML =  `Type : ${movie.Type}`;
        divInfos.appendChild(liType);
        ul.appendChild(divInfos);

        if (movie.Poster != "N/A")
        {
            let liAffiche =  document.createElement("li")
            liAffiche.innerHTML =  `<img src = ${movie.Poster}></img>`;
            ul.appendChild(liAffiche);
        }
        divLink.appendChild(ul);
      
        divLink.style.textDecoration = "none";
        divLink.style.color = "black";
        divLink.setAttribute("href", `https://www.imdb.com/title/${movie.imdbID}/` );
        divLink.setAttribute("target", "_blank");
        divFilm.appendChild(divLink);
        div.appendChild(divFilm);
      
    });
    body.appendChild(div);

}