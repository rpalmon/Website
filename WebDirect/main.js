var urls = [
    'https://www.google.com'
]
// if(localStorage.getItem(''))

function addURL(e){
    e.preventDefault();
    console.log(e.target.url.value);
    urls.push(e.target.url.value);

}