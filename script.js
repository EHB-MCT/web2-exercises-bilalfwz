window.onload = function () {
    console.log('loaded');


    document.getElementById('form')
        .addEventListener('submit', event => {
            event.preventDefault();

            let name = document.getElementById('nameInput').value;
            let email = document.getElementById('emailInput').value;
            let order = document.getElementById('');
        })
}