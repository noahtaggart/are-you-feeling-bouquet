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
export const fetchDistrubutors = () => {
    return fetch(`${API}/distributors`)
    .then(response => response.json())
    .then(
        (distributors) => {
            applicationState.distributors = distributors
        }
    )
}
export const fetchNurseries = () => {
    return fetch(`${API}/nurseries`)
    .then(response => response.json())
    .then(
        (nurseries) => {
            applicationState.nurseries = nurseries
        }
    )
}
export const fetchNurseryFlowerBridges = () => {
    return fetch(`${API}/nurseryFlowerBridges`)
    .then(response => response.json())
    .then(
        (nurseryFlowerBridges) => {
            applicationState.nurseryFlowerBridges = nurseryFlowerBridges
        }
    )
}
export const fetchNurseryDistributionBridges = () => {
    return fetch(`${API}/nurseryDistributionBridges`)
    .then(response => response.json())
    .then(
        (nurseryDistributionBridges) => {
            applicationState.nurseryDistributionBridges = nurseryDistributionBridges
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
export const getDistributors = () => {
    return applicationState.distributors.map(distributor => ({...distributor}))
}
export const getNurseries = () => {
    return applicationState.nurseries.map(nursery => ({...nursery}))
}
export const getNurseryFlowerBridges = () => {
    return applicationState.nurseryFlowerBridges.map(nurseryFlowerBridge => ({...nurseryFlowerBridge}))
}
export const getNurseryDistributionBridges = () => {
    return applicationState.nurseryDistributionBridges.map(nurseryDistributionBridge => ({...nurseryDistributionBridge}))
}