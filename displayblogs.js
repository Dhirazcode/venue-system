function displayblogs(articles) {
    blogcontainer.innerHTML = " ";
    articles.foreach((article) => {
        const blogcard = document.createElement("div");
        blogcard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        title.textContent = article.title;
        const description = document.createElement("p");
        description.textContent = article.description;

        blogcard.appendChild(img);
        blogcard.appendChild(title);
        blogcard.appendChild(description);
        blogcontainer.appendChild(blogcard);

    });
}
