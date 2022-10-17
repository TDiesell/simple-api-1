document.querySelector('button').addEventListener('click', getCat)

function getCat(){
    const cat= document.querySelector('input').value
fetch(` https://api.thecatapi.com/v1/images/search?limit=${cat}_ids=beng&api_key=live_mfHyurZ55elKN574BZsrDfPYXzfpw7kUJ9tYFlBNbRFnbiqLwiZjo4T3hulq54xf` )
.then( res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('img').src = data[0].url

})
}