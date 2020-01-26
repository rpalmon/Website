const urlHTML = document.getElementById('urls');
let urls = [];

if(localStorage.getItem('urls') === null){
    localStorage.setItem('urls', urls);
}else{
    urls = JSON.parse(localStorage.getItem('urls'));
}
// if(localStorage.getItem(''))

for(let i = 0; i < urls.length; i++){
    console.log(urls[i]);
    urlHTML.innerHTML += `<div>` + urlTemplate(urls[i]) + `</div>`;
}

function urlTemplate(url){ 
    return (`<div class='urls'>` + url + `</div>`)
}
function addURL(e){
    e.preventDefault();
    console.log(e.target.url.value);
    urls.push(e.target.url.value);
    localStorage.setItem('urls', JSON.stringify(urls));
    urlHTML.innerHTML += urlTemplate(urls[urls.length-1]);
    
}