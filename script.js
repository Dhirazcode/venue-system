const apikey=`cb245b1fa8234a70bf46564b45cb2cbf`
 
const blogcontainer=document.getElementById("blog-container")

async function fetchrandomnews(){
    try {
        const apiUrl=`https://newsapi.org/v2/everything?q=tesla&from=2024-01-24&sortBy=publishedAt&apiKey=$(apikey)`;
        const response = await fetch(apiUrl);
        const data = await response.json();
         return data.venues;
    } catch (error) {
        console.error("fetching data is not available",error)
        return[];
    }
}
(async ()=> {
    try {
        const articles = await fetchrandomnews();
        displayblogs(articles);

    } catch (error) {
        console.error("fetching data is not available", error);

    }
}) 