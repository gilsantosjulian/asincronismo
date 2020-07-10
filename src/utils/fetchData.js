const XMLHttprequest = require('xmlhttprequest').XMLHttpRequest

/**
 * Request states according with docs
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
 */
const API = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url) => {
  const xhttp = new XMLHttprequest();
  return new Promise((resolve, reject) => {
    xhttp.open('GET', url, true) // third param is to activate async mode
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) 
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(`Error ${url}`)
    }
    xhttp.send()
  })
}

module.exports = {
  fetchData
}