import { getDistributors } from "./dataAccess.js";

export const DistributorsList = () => {
    const distributors = getDistributors()
    let html = `<ul>`

    const listItems = distributors.map(distributor => {
        return `<li value="${distributor.id}">${distributor.color} ${distributor.commonName}</li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}