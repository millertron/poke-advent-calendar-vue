import { pokeData } from "../pokeData"

export const serverUrl = process.env.VUE_APP_NODE_ENV === `production` ? `` : "http://localhost:3200"

export const totalPocketNum = parseInt(process.env.VUE_APP_TOTAL_POCKET_NUM) || 25

export const isPastNthDayOfMonth = n => {
    
    const monthToCheck = parseInt(process.env.VUE_APP_CALENDAR_MONTH) || 12
    const yearToCheck = parseInt(process.env.VUE_APP_CALENDAR_YEAR) || 2020
    const today = new Date()

    return today.getFullYear() === yearToCheck 
        && (today.getMonth() + 1) === monthToCheck // +1 as getMonth() is zero-indexed 
        && n <= today.getDate()
}

export const getPokeName = pokeId => pokeData[pokeId - 1]

export const  getPokeImgSrc = pokeName => {
    const formattedName = pokeName.toLowerCase().replace("'",'');
    return `https://img.pokemondb.net/sprites/black-white/anim/normal/${formattedName}.gif`
}
