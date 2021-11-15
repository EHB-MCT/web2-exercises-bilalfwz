"use strict"

async function getAllinfo() {
    let response = await fetch('https://api.tvmaze.com/shows')
    return await response.json()
        .then(data => {
            console.log(data)
            let content = document.getElementById("data")
            let info = data[0]

            content.innerHTML += `
  <h1> ${info.name}</h1>
  <p> ${info.genres}</p>
  <img src="${info.image.medium}" width="300">
  <p> ${info.summary}</p>`

        })
}

getAllinfo();