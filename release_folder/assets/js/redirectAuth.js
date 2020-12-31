try{
    const socket=io("https://uptextv.com:1000",{transport:["websocket "]});
    
    const twitch_code = document.location.href.split("=")[1].split("&")[0];
    
    const redirectTimeout = setTimeout(()=>{redirectHome()},2000) // redirect user to uptextv - home after 2s
    
    socket.emit("onLogin",twitch_code)
    socket.on('callback_onLogin',(type,value,userID)=>{
        clearTimeout(redirectTimeout)
        if(type=='token'){
            sessionStorage.setItem('security-token', value);
            sessionStorage.setItem('userID', userID);
        }
        redirectHome()
    })
}catch(e){
    console.log(e)
}

function redirectHome(){
    location.href="https://uptextv.com"
}