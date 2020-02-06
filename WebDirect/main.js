const urlHTML = document.getElementById('urls');
let urls = [];

var divs = urlHTML.getElementsByTagName('div');
console.dir(divs);

if(localStorage.getItem('urls') === null){
    localStorage.setItem('urls', urls);
}else{
    urls = JSON.parse(localStorage.getItem('urls'));
}
// if(localStorage.getItem(''))

for(let i = 0; i < urls.length; i++){
    console.log(urls[i]);
    urlHTML.innerHTML += `<div>` + urlTemplate(urls[i], i) + `</div>`;
}

function urlTemplate(url, index){ 
    return (`<div class='urls' id=${index}>` + `<a href="` + url + `">` +  url + `</a><button class="btn btn-primary" onclick=clicked(event)>` + `Delete</button></div>`)
}

function clicked(e){
    console.log(e.target);
    console.log(urls[e.target.parentNode.id]);
    removeURL(e.target.parentNode.id);
}

function addURL(e){
    e.preventDefault();
    console.log(e.target.url.value);
    urls.push(e.target.url.value);
    localStorage.setItem('urls', JSON.stringify(urls));
    urlHTML.innerHTML += urlTemplate(urls[urls.length-1]);
    
}

function removeURL(url){
    console.log(url);
    urls.splice(url, 1);
    localStorage.setItem('urls', JSON.stringify(urls));
    document.getElementById(url).remove();
}