var myForm = document.getElementById('myForm')
myForm.addEventListener('submit',function(x){

x.preventDefault()
show_loading()

var country = document.getElementById('country').value
const settings = {
async: true,
crossDomain: true,
url: (`https://covid-193.p.rapidapi.com/history?country=${country}`),
method: "GET",
headers: {

}
};


$.ajax(settings).done(function (result) {
console.log(result, 'darijquery');
    document.getElementById('Active').innerHTML = result.response[0].cases.active
    document.getElementById('New').innerHTML = result.response[0].cases.new
    document.getElementById('Recovered').innerHTML = result.response[0].cases.recovered
    document.getElementById('Total').innerHTML = result.response[0].cases.total
    document.getElementById('Deaths').innerHTML = result.response[0].deaths.total
    document.getElementById('Test').innerHTML = result.response[0].tests.total
    
    hide_loading()
});
});

// scrip hide loading

let fadeTarget = document.querySelector(".loading")
function show_loading() {
    fadeTarget.style.display = "block"
    fadeTarget.style.opacity=1;
}

function hide_loading() {
    fadeTarget.style.display = "none"
    let fadeEfect = setInterval(()=> {
        if (!fadeTarget.style.opacity){
            fadeTarget.style.opacity=1;
        }
        if (!fadeTarget.style.opacity >0 ){
            fadeTarget.style.opacity -= 0.1;
        }else {
            clearInterval(fadeEfect)
            fadeTarget.style.display = "none"
        }
    },200)
}
