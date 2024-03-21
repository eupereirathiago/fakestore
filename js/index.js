let lista = [];

function getCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(response => {
        categorias.innerHTML += `<option>Todos</option>`;
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
        lista = response;
        renderList(response)
        return;
    }
        alert("produtos não encontrados :/");

} getProducts();

function orderingBy(){
    // if(ordenacao.value == 1){
    //     renderList(lista.toSorted((a,b) => a.price - b.price))
    // }else{
    //     renderList(lista.toSorted((a,b) => b.rating.rate - b.rating.rate))
    // }
    renderList(lista.toSorted((a, b) => ordenacao.value == 1 ? a.price - b.price : b.rating.rate - b.rating.rate))
}

function filteredBy(){
    if(categorias.value == 'Todos'){
        renderList(lista)
    }else{
        renderList(lista.filter((item) => item.category == categorias.value))

    }
}

function renderList(arr){
    produtos.innerHTML = ''
    arr.map(produto => {
        produtos.innerHTML += `
        <li>
        <img src="${produto.image}">
        <h2>${produto.title}</h2>
        <h3>${produto.category}</h3>
        <p>${produto.description}</p>
        <h4>R$${produto.price} <span><box-icon type='solid' name='star'></box-icon>${produto.rating.rate}</span></h4>
    </li>`;
    })

}