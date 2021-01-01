 const socket=io("https://webapi.uptextv.com",{
     transport:["websocket "]
 });

getUserData().then((userData)=>{
    sessionStorage.setItem('userData', userData);
    
    let username = userData.displayname
    let profile_picture_url = userData.profile_picture
    
    show_dashboard(username,profile_picture_url)
}).catch((err)=>{
    if(err=='no token founded') return;
    console.log(err)
})    

function getUserData(){
    return new Promise((resolve,reject)=>{
        check_token().then((isTokenValid)=>{
            if(isTokenValid){
                const userID = sessionStorage.getItem('userID')
                socket.emit('getUserInfo',userID)
                socket.on('callback_getUserInfo',(result,userData)=>{
                    if(result=='done'){
                        resolve(userData)
                    }else{
                        // error 
                        console.log(result)
                        reject(result)
                    }
                })
            }
        })  
    })
}

function check_token(){
    return new Promise((resolve,reject)=>{
        const token = sessionStorage.getItem('security-token')
        if(token){
            socket.emit("isTokenValid",token)
            socket.on('callback_isTokenValid',(result,isTokenValid)=>{
                if(result=='done'){
                    resolve(isTokenValid)   
                }else{
                    // error
                    console.log(result)
                    reject(result)
                }
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

function login(){
 location.href = 'https://id.twitch.tv/oauth2/authorize?client_id=0c36td77t9i3e1npj8gy6req93567o&redirect_uri=https://uptextv.com/redirectAuth.html&response_type=code&scope=user:read:email&claims={"id_token":{"email":null,"email_verified":null},"userinfo":{"picture":null}}';   
}