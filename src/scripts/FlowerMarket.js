import { FLowersList } from "./FlowersList.js"

export const FlowerMarket = () => {
    return `
    <h1>Flower Market</h1>
    <h2>Flower List</h2>
    <section class="flowerList">
        ${FLowersList()}
    </section>
    `
}