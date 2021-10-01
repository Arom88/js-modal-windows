 let fruits = [
     {id: 1, title: 'Apple', price: 2, img:'https://static.wikia.nocookie.net/the-snack-encyclopedia/images/7/7d/Apple.png/revision/latest?cb=20200706145821'},
     {id: 2, title: 'Orange', price: 3, img: 'https://producemadesimple.ca/wp-content/uploads/2015/01/orange-web.jpg'},
     {id: 3, title: 'Mango', price: 4, img: 'https://static.libertyprim.com/files/familles/mangue-large.jpg?1569271798'}
 ]
 
const toHTML = fruit => `
<div class="col">
        <div class="card">
            <img style="height: 300px;" src="${fruit.img}" class="card-img-top" alt="${fruit.title}">
            <div class="card-body">
              <h5 class="card-title">${fruit.title}</h5>
              <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">See price</a>
              <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Delete</a>
            </div>
        </div>
 </div>
    `

function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
}
render()

 const priceModal = $.modal({
     title: 'Price item',
     closable: true,
     width: '400px',
     footerButtons: [
         {text: 'OK', type: 'primary', handler(){
             priceModal.close()
         }}
     ]
 })



 document.addEventListener('click', event => {
     event.preventDefault()
     const btnType = event.target.dataset.btn
     const id = +event.target.dataset.id
     const fruit = fruits.find(f => f.id === id)

     if(btnType === 'price'){
    priceModal.setContent(`
    <p>Price for ${fruit.title}: <strong>${fruit.price}$</strong></p>
    `)
    priceModal.open()
    } else if (btnType === 'remove'){
        $.confirm({
            title: 'Are you sure?',
            content: `<p>Are you ready to delete fruit: <strong>${fruit.title}?</strong></p>`
        }).then(()=>{
        fruits = fruits.filter(f => f.id !== id)
        render()
        }).catch(()=>{

        })
    }
 })