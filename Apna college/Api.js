/* 
fetch API: it provide an interface for fetching (sending/receving).



*/

const url = "https://dog.ceo/api/breeds/image/random"
const imageurl =document.querySelector("#imagelink")
const mybutton = document.querySelector("#btn")





/* const getfacts = async ()=>{
    let response = await fetch(url)
    console.log(response)
 
    let data = await response.json()
    console.log(data.message)
    imageurl.innerText = data.message
} */

/* function getfacts(){
  fetch(url).then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data)
    imageurl.innerText = data.message

  })
} */






mybutton.addEventListener("click",getfacts)

// HTTP request method
// Response status code
// HTTP response header also contain 
  /* DAta came as a json format because data looks like a js object

AJAJ: Asynchronus js and json
AJAX: Asynchronus js and XML
json() method: return a second promise that (json ------> js object)


*/

