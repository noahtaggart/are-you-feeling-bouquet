import { getFlowers } from "./dataAccess.js"



export const FLowersList = () => {
    const flowers = getFlowers()
    let html = `<ul>`

    const listItems = flowers.map(flower => {
        return `<li value="${flower.id}">${flower.color} ${flower.commonName}</li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}