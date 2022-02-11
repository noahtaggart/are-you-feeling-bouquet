import { getDistributors } from "./dataAccess.js";

export const DistributorsList = () => {
    const distributors = getDistributors()
    let html = `<ul>`
//itterates through distributors
    const listItems = distributors.map(distributor => {
        //returns list of distributors in html format
        return `<li value="${distributor.id}">${distributor.distributorName} located at ${distributor.address} ${distributor.city}, ${distributor.state}</li>`
    })
    html += listItems.join("")
    html += "</ul>"
    //return the html
    return html
}