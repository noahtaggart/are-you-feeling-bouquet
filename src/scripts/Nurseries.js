import { getDistributors, getFlowers, getNurseries, getNurseryDistributionBridges, getNurseryFlowerBridges } from "./dataAccess.js";


export const Nurseries = () => {
    const nursuries = getNurseries()
    //itterates through distributors
    const nursery = nursuries.map(nursery => `
    <div>
        <h3>${nursery.name}</h3>
            <div> works with:
                <ul>
                    ${matchDistributors(nursery)}
                </ul>
            </div>
            <div>and has these flowers available:
                <ul>
                ${matchFlowers(nursery)}
                </ul>
            </div>
        </div>
    `)


    return nursery.join("")
}
//function to match nursery to distributor
const matchDistributors = (nursery) => {
    //match distributor nursery
    const distributors = getDistributors()
    const nurseryDistributionBridges = getNurseryDistributionBridges()

    //itterate through nurseryDistributors
    const matchedNuseries = nurseryDistributionBridges.filter(nurseryDistributionBridge => nurseryDistributionBridge.nurseryId === nursery.id)
    const matchedDistributors = distributors.filter(distributor => {
        return matchedNuseries.find(matchedNusery => matchedNusery.distributorId === distributor.id)
    })
    const listItems = matchedDistributors.map(matchedDistributor => {
        return `<li>${matchedDistributor.distributorName}</li>`
    })

    return listItems.join("")




}


//function to match nursery to flowers
const matchFlowers = (nursery) => {
    //match flowers to nursery
    const flowers = getFlowers()
    const flowerBridges = getNurseryFlowerBridges()

    //itterate through nurseryflowerbridge
    const matchedNuseries = flowerBridges.filter(flowerBridge => flowerBridge.nurseryId === nursery.id)

    const matchedFlowers = flowers.filter(flower => {
        return matchedNuseries.find(matchedNusery => matchedNusery.flowerId === flower.id)
    })
    const listItems = matchedFlowers.map(matchedFlower => {
        return `<li>${matchedFlower.color} ${matchedFlower.commonName}</li>`
    })

    return listItems.join("")




}
