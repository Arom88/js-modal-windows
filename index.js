 let fruits = [
     {id: 1, title: 'Apple', price: 2, img:'data:image/jpeg;base64,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'},
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