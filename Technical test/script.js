//Api= https://elephant-api.herokuapp.com/elephants//

// Include this extension on Google Chrome to make the Api work
// = https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US


"use strict"

async function getAllArticle() {
    let response = await fetch('https://elephant-api.herokuapp.com/elephants')
    return await response.json()
        .then(data => {
            data.length = 47
            console.log(data)
            let content = document.getElementById("info")

            data.forEach(info => {

                content.innerHTML += `
                
                <h1> ${info.name}</h1>
                
                <h3> ${info.affiliation}</h3>
                
                <img src="${info.image}" width="600">
                
                <p> ${info.note}</p>`
            });

        })
}
getAllArticle();