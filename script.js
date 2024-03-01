const findElementById = id =>{
    return document.getElementById(id);
}

const fetchAllCategory = async () =>{
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/categories`
    );
    const data = await res.json();
    const categories = data.data.news_category;
    console.log(categories);
}

fetchAllCategory()