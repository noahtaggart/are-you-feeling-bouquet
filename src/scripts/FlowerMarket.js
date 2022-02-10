import { FLowersList } from "./FlowersList.js"
import { RetailerList } from "./RetailerList.js"

export const FlowerMarket = () => {
    return `
    <h1>Flower Market</h1>
    <h2>Flower List</h2>
    <section class="flowerList">
        ${FLowersList()}
    </section>
    <section class="retailerList">
    <h2>Retailer List</h2>
        ${RetailerList()}
    </section>
    <sect
    `
}