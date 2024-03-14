function getCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(response => {
        for(let i = 0; i < response.length; i++){
            categorias.innerHTML += `<option>${response[i]}</option>`;
        }
        // response.map(r => {
        //     categorias.innerHTML += `<option>${r}</option>`;
        // })
    })
} getCategories();

async function getProducts(){
    const request = await fetch('https://fakestoreapi.com/products');
    const response = await request.json();
    if(response.length > 0){
        produtos.innerHTML = '';
        response.map(produto => {
            produtos.innerHTML += `
            <li>
            <img src="${produto.image}">
            <h2>${produto.title}</h2>
            <h3>${produto.category}</h3>
            <p>${produto.description}</p>
            <h4>R$${produto.price} <span><box-icon type='solid' name='star'></box-icon>${produto.rating.rate}</span></h4>
        </li>`;
        })
        return;
    }

    alert("produtos não encontrados :/");
} getProducts();