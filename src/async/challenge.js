const { fetchData } = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api)
    const character = await fetchData(`${API}${data.results[0].id}`)
    const origin = await fetchData(character.origin.url)
    console.log(data.info.count)
    console.log(character.name)
    console.log(origin.dimension)    
  } catch (error) {
    console.log(error)
  }
}

// console.log('BEFORE')
// anotherFunction(API)
// console.log('AFTER')

const pruebaFinal = async () => {
  console.log('BEFORE')
  await anotherFunction(API)
  console.log('AFTER')
}

pruebaFinal()