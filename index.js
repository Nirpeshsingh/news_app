let key  = "e2abe88e95d543739b3ce931d2e6118a";
let cardData = document.querySelector(".cardData");
let searchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");

function reload(){
    window.location.reload();
}
const getData = async(input) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);

    searchType.innerText="Search : "+input;
    inputData.value=""
    cardData.innerHTML="";
    jsonData.articles.forEach(function(articles){
        console.log(articles);

     let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML=`
    <img src="${articles.urlToImage}" alt="">
    <h3>${articles.title}</h3>
    <p>${articles.description}</p>
    `
    divs.addEventListener("click",function(){
        window.open(articles.url);
    })
    })   
  
}

window.addEventListener("load",function(){
    getData("India")
})

searchBtn.addEventListener("click",function(){
    let inputText = inputData.value;
    getData(inputText);
})

function navClick(navName){

    if(navName == "politics"){
        document.getElementById("politics").style.color="rgb(0, 140, 255)";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("entertainment").style.color="white";
    }
    if(navName == "sports"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="rgb(0, 140, 255)";
        document.getElementById("technology").style.color="white";
        document.getElementById("entertainment").style.color="white";
    }
    if(navName == "technology"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="rgb(0, 140, 255)";
        document.getElementById("entertainment").style.color="white";
    }
    if(navName == "entertainment"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("entertainment").style.color="rgb(0, 140, 255)";
    }
  getData(navName)
}
