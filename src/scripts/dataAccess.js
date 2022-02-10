//temporary state
const applicationState = {}

//export transientState
export const transientState = () => {
    return applicationState
}
//sets html target
const mainContainer=document.querySelector("#container")

//sets api server location
const API = "http://localhost:8088"

//fetches flowers from database
export const fetchFlowers = () => {
    return fetch(`${API}/flowers`)
    .then(response => response.json())
    .then(
        (flowers) => {
            applicationState.flowers = flowers
        }
    )
}
export const fetchRetailers = () => {
    return fetch(`${API}/retailers`)
    .then(response => response.json())
    .then(
        (retailers) => {
            applicationState.retailers = retailers
        }
    )
}

//exports copies of database arrays
export const getFlowers = () => {
    return applicationState.flowers.map(flower => ({...flower}))
}
export const getRetailers = () => {
    return applicationState.retailers.map(retailer => ({...retailer}))
}