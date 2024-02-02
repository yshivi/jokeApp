const main = document.querySelector(".main");
const delivery = document.querySelector("#delivery");
const setup = document.querySelector("#setup");
const joke = document.querySelector("#joke");
const button=document.querySelector("#button")

function fetchData(){
fetch ("https://v2.jokeapi.dev/joke/Any")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    if (data.type === "single") {
      joke.innerHTML = data.joke
    } else {
      setup.innerHTML = data.innerHTML + data.delivery
    }
  })
}
button.addEventListener("click",()=>{
fetchData()
})
