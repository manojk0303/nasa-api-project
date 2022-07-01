//UI VARIABLES
const UI_navbar = document.getElementById("navbar");
const UI_home = document.getElementById("home");
const UI_favourite = document.getElementById("fav");
const UI_cardContainer = document.getElementById("card-container");
const UI_loader = document.getElementById("loader");

//OTHER VARIABLES
const count = 10;
const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
let DATA = [];

// UI METHOD---------------------------------------------------------------------------------------------------------------------------------------------


function showLoader(){
    UI_loader.hidden = false;
}
function hideLoader(){
    UI_loader.hidden = true;
}


//BUILDS UI DYNAMICALLY WITH THE HELP OF NASA API
function buildUI(){
    UI_cardContainer.textContent = "";
   
    DATA.forEach((info) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-aos","fade-up");

        const cardImage = document.createElement("div");
        cardImage.classList.add("card-image");

        const a = document.createElement("a");
        a.href = info.hdurl;
        a.target = "_blank";

        const img = document.createElement("img");
        img.setAttribute("src",`${info.url}`);
        img.setAttribute("title",`view full image`);
        img.setAttribute("alt",`Oops broken Image`);
        console.log(info.url)

        const cardDetails = document.createElement("div");
        cardDetails.classList.add("card-details");

        const h3 = document.createElement("h3");
        h3.textContent = info.title;

        const p = document.createElement("p");
        p.textContent = info.explanation;

        const span = document.createElement("span");
        const div = document.createElement("div");
        div.innerHTML = "	&nbsp;";

        const strong = document.createElement("strong");
        strong.textContent = info.date;
        const br = document.createElement("br");

        span.appendChild(strong,div);
        cardDetails.append(h3,p,span);
        a.appendChild(img);
        cardImage.appendChild(a);
        card.append(cardImage,cardDetails);
        UI_cardContainer.appendChild(card);



    });
    hideLoader();
    scrollTo(0,0);
}




// -----------------------------------------------------------------------------------------------------------------------------------------------------


//GETS DATA FROM NASA API
async function getData(){
    showLoader();
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data);
        DATA = data;
        console.log("building ui")
        buildUI();

    }catch(error){
        console.log(error);
    }
}



//INITIATES THE PROGRAM
getData();
