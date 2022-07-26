const url = 'https://api.github.com/users/' 
const main = document.getElementById('main')

var username = document.getElementById('username')


function getUser() {
    var user = username.value
    
    axios.get(url + user)
    .then(response => {
    var data =  response.data
    var output = `
        <div id="card">
            <div class="perfil">
                <img src="${data.avatar_url}" class="img-perfil">
            </div>
            <div class="info">
                <p class="data-info"><strong>Name:</strong> <span id="name"> ${data.name}</span></p>
                <p class="data-info"><strong>Company:</strong> <span id="company">${data.company}</span></p>
                <p class="data-info"><strong>Bio:</strong> <span id="bio">${data.bio}</span></p>
            </div>
        </div>
    `
        main.innerHTML = output
    })
    .catch(error => console.log(error))
}
