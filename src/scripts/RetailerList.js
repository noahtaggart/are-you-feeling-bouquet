import { getRetailers } from "./dataAccess.js";

export const RetailerList = () => {
    const retailers = getRetailers()
    let html = `<ul>`

    const listItems = retailers.map(retailer => {
        return `<li value="${retailer.id}">${retailer.retailerName} ${retailer.address} ${retailer.city}, ${retailer.state}</li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}