//Api= https://elephant-api.herokuapp.com/elephants//

// Include this extension on Google Chrome to make the Api work
// = https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US

"use strict"

async function getRandomArticle() {
    let response = await fetch('https://elephant-api.herokuapp.com/elephants/random')
    return await response.json()
        .then(data => {
            console.log(data)
            let content = document.getElementById("info")
            let info = data[0]
            content.innerHTML = `
    <h1> ${info.name}</h1>
    <h3> ${info.affiliation}</h3>
    <img src="${info.image}" width="600">
    <p> ${info.note}</p>`

        })
}
getRandomArticle();