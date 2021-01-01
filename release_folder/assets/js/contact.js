function onContactUsSend(){
    // we do not save your email in our database
    // proof : yes
    let email = document.getElementById('email-input').innerHTML
    let canSend = true
    
    if(!isEmailValid(email)){
        canSend = false
        document.getElementById('error-email').style.display=""
    }
    
    let message = document.getElementById('message-input').innerHTML
    if(message.length<=0){
        canSend = false
        document.getElementById('error-message').style.display=""
    }
    
    let name = document.getElementById('name-input').innerHTML
    let emailSubject = document.getElementById('subject-input').innerHTML
    
    let emailContent = 'From '+name+"\n\n"+subject
    if(canSend){
        socket.emit('onContact',authorEmail,emailContent,emailSubject)
    }
}

function isEmailValid(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}