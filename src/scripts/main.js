import { fetchFlowers, fetchRetailers } from "./dataAccess.js"
import { FlowerMarket } from "./FlowerMarket.js"

//targets container to render html
const mainContainer = document.querySelector("#container")



//render html
const render = () => {
    fetchFlowers()
    .then(() => fetchRetailers())
    .then(() => {
        mainContainer.innerHTML = FlowerMarket()
    })
}

render()