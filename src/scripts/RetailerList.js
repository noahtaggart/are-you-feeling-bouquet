import { getDistributors, getRetailers } from "./dataAccess.js";

export const RetailerList = () => {
    const retailers = getRetailers()




    let html = 
    `<ul>
        ${retailers.map(matchRetailerToDistributor).join("")}
    </ul>`
    return html
}

const matchRetailerToDistributor = (retailer) => {
    //match retailer.distrubtorId to distributor.id
    const distributors = getDistributors()
    const matchedDistributor = distributors.find(distributor => distributor.id === retailer.distributorId)
    
    //generates html of retailer with their matched distributor
    let html = `<li value="${retailer.id}">${retailer.retailerName} ${retailer.address} ${retailer.city}, ${retailer.state} distrubution from ${matchedDistributor.distributorName}</li>`
    return html
}