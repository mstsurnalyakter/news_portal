const findElementById = id =>{
    return document.getElementById(id);
}

const fetchAllCategory = async () =>{
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/categories`
    );
    const data = await res.json();
    const categories = data.data.news_category;


    categories.forEach(category =>{
        newBtn = document.createElement("button");
        newBtn.classList = 'btn'
        newBtn.innerText = category.category_name;
         findElementById("btn-container").appendChild(newBtn);
    })
}

fetchAllCategory()