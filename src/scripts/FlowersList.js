import { getFlowers } from "./dataAccess.js"



export const FLowersList = () => {
    const flowers = getFlowers()
    let html = `<ul>`
//itterates through flowers
    const listItems = flowers.map(flower => {
        //returns list of flowers in html format
        return `<li value="${flower.id}">${flower.color} ${flower.commonName}</li>`
    })
    html += listItems.join("")
    html += "</ul>"
    //return the html
    return html
}