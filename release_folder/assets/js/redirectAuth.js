if(document.location.hash){
    var token = document.location.hash.split('&')[0].split('=')[1]
    if(token){
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', 'https://uptextv.com/onLogin?access_token='+token, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://uptextv.com');
        xhr.setRequestHeader('Access-Control-Allow-Methods','PUT');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send('');
        //redirectHome()
    }else{
        redirectHome()
    }
}

function redirectHome(){
    location.href='https://uptextv.com'
}