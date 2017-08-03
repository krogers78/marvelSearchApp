//https://gateway.marvel.com:443/v1/public/comics?title=Wolverine&apikey=619e8982dc6d0215038b7966347bc50a

const input = document.querySelector('#search input')
const form = document.querySelector('#search form')

let base = 'https://gateway.marvel.com:443/v1/public/comics?title='
const key = '&apikey=619e8982dc6d0215038b7966347bc50a'
let data = ""
const params = "$query="
const options = {
  method: "GET"
}

form.addEventListener('submit', e => {
  e.preventDefault()

  let hero = encodeURI(input.value)
  let url  = `${base}${hero}${key}`
  console.log(url)

  fetch(url, options)
    .then(response => response.json())
    .then(responseAsJson => {
      console.log(responseAsJson)

      data = responseAsJson.data.results
      renderData(data)

    })
    .catch(error => {
      console.log('An Error Occured:', error)
    })
})

const renderData = (data) => {
  data.forEach((item, index) => {
    if(item.title) {
      console.log(item.title)
    }
  })
}
