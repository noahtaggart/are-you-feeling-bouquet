import { fetchDistrubutors, fetchNurseryDistributionBridges, fetchFlowers, fetchNurseries, fetchNurseryFlowerBridges, fetchRetailers } from "./dataAccess.js"
import { FlowerMarket } from "./FlowerMarket.js"

//targets container to render html
const mainContainer = document.querySelector("#container")



//render html
const render = () => {
    fetchFlowers()
    .then(() => fetchRetailers())
    .then(() => (fetchDistrubutors()))
    .then(() => (fetchNurseries()))
    .then(() => (fetchNurseryFlowerBridges()))
    .then(() => (fetchNurseryDistributionBridges()))
    .then(() => {
        mainContainer.innerHTML = FlowerMarket()
    })
}

render()