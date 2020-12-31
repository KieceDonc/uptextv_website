 const socket=io("https://webapi.uptextv.com",{
     transport:["websocket "]
 });


try{
    check_token().then((isTokenValid)=>{
        if(isTokenValid){
            const userID = sessionStorage.getItem('userID')
            socket.emit('getUserInfo',userID)
            socket.on('callback_getUserInfo',(result,userData)=>{
                if(result=='done'){
                    console.log(userData)
                }else{
                    // error 
                    console.log(result) 
                }
            })
        }
    })   
}catch(e){
    console.log(e)
}

function check_token(){
    return new Promise((resolve,reject)=>{
        const token = sessionStorage.getItem('security-token')
        if(token){
            socket.emit("isTokenValid",token)
            socket.on('callback_isTokenValid',(isTokenValid)=>{
                resolve(isTokenValid)
            })   
        }else{
            reject('no token founded')
        } 
    })
}

function show_dashboard(username,profile_picture_url){
    let loginNavItem = document.getElementById('loginNavItem')
    let dashboardNavItem = document.getElementById('dashboardNavItem')
    
    loginNavItem.style.display= 'none'
    dashboardNavItem = 'inline-flex'
    
    let link_dashboard = dashboardNavItem.children[0]
    let profile_picture = dashboardNavItem.children[1]
    
    link_dashboard.innerHTML = uername
    profile_picture.src = profile_picture_url
}

function scrollToElement(elementID){
    let element = document.getElementById(elementID);
    if(element!=null){
        let elementRect = element.getBoundingClientRect();
        let absoluteElementTop = elementRect.top + window.pageYOffset;
        let middle = absoluteElementTop - (window.innerHeight / 2);
        window.scrollTo(0, middle);   
    }
}