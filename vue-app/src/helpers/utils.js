import { pokeData } from "../pokeData"

export const serverUrl = process.env.NODE_ENV === `production` ? `` : "http://localhost:3200"

export const totalPocketNum = parseInt(process.env.VUE_APP_TOTAL_POCKET_NUM) || 25

const calendarMonth = parseInt(process.env.VUE_APP_CALENDAR_MONTH) || 12
const calendarYear = parseInt(process.env.VUE_APP_CALENDAR_YEAR) || 2020
const today = new Date()

export const isCalendarAvailable = () => {
    return today.getFullYear() === calendarYear && today.getMonth() + 1 === calendarMonth
}

export const isPastNthDayOfMonth = n => {
    return isCalendarAvailable && n <= today.getDate()
}

export const getPokeNames = pokeId => pokeData[pokeId - 1]

export const  getPokeImgSrc = pokeName => {
    const formattedName = pokeName.toLowerCase()
        .replace("'",'')
        .replace('. ','-')
        .replace('♀','-f')
        .replace('♂','-m');
    return `https://img.pokemondb.net/sprites/black-white/anim/normal/${formattedName}.gif`
}
