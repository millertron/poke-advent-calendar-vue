import { pokeData } from "../pokeData"

export const serverUrl = process.env.NODE_ENV === `production` ? `` : "http://localhost:3200"

export const isPastNthDayOfMonth = n => {
    /*
    const monthToCheck = 12
    const yearToCheck = 2020
    const today = new Date()

    return today.getFullYear() === yearToCheck 
        && (today.getMonth() + 1) === monthToCheck // +1 as getMonth() is zero-indexed 
        && n <= today.getDate()
        */
    return n > 3
}

export const getPokeName = pokeId => pokeData[pokeId - 1]

export const  getPokeImgSrc = pokeName => {
    const formattedName = pokeName.toLowerCase().replace("'",'');
    return `https://img.pokemondb.net/sprites/black-white/anim/normal/${formattedName}.gif`
}
