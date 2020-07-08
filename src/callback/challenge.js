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

const fetchData = (url, callback) => {
  let xhttp = new XMLHttprequest();
  xhttp.open('GET', url, true) // third param is to activate async mode
  xhttp.onreadystatechange = (event) => {
    if(xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error (`Error ${url}`)
        return callback(error, null)
      }
    }
  }
  xhttp.send()
}

fetchData(API, (error1, data1) => {
  if(error1) return console.log(error1)
  fetchData(`${API}${data1.results[0].id}`, (error2, data2) => {
    if(error2) return console.log(error2)
    fetchData(data2.origin.url, (error3, data3) => {
      if(error3) return console.log(error3)
      console.log(data1.info.count)
      console.log(data2.name)
      console.log(data3.dimension)
    })
  })
})

