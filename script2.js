const apikey=`cb245b1fa8234a70bf46564b45cb2cbf`
 
const venuecontainer=document.getElementById("venue-container")

async function fetchrandomnews(){
    try {
        const apiUrl=`https://newsapi.org/v2/top-headlines?country=us&category=business&parameter=10&apikey=${apikey}`
        const response = await fetch(apiUrl);
        const data = await response.json();
         return data.venues;
    } catch (error) {
        console.error("fetching data is not available",error)
        return[];
    }
}
function displayvenue(venues) {
    venuecontainer.innerHTML=" ";
    venues.foreach((article)=>{
        const venueblog=document.createElement("div");
        venueblog.classList.add("venue-blog");
        const img=document.createElement("img");
        img.src= article.urlToImage;
        img.alt= article.title;
        const title=document.createElement("h2");
        title.textContent=article.title;
        const description=document.createElement("p");
        description.textContent=article.description;
         
        venueblog.appendChild(img);
        venueblog.appendChild(title);
        venueblog.appendChild(description);
        venuecontainer.appendChild(venueblog);

    })
}
(async () => {
    try {
        const venues = await fetchrandomnews();
       displayvenue(venues);
        
    } catch (error) {
        console.error("fetching data is not available",error);
         
    }
})();