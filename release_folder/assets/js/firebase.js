var script_firebase_app = document.createElement('script')
script_firebase_app.src ='https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js'

document.body.append(script_firebase_app)

var script_firebase_analytics = document.createElement('script')
script_firebase_analytics.src ='https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js'

document.body.append(script_firebase_analytics)

var firebaseConfig = {
    apiKey: "AIzaSyD36EdyxQcgqc9xOo1M3XL2UJB8BQ--rqI",
    authDomain: "uptextv.firebaseapp.com",
    databaseURL: "https://uptextv.firebaseio.com",
    projectId: "uptextv",
    storageBucket: "uptextv.appspot.com",
    messagingSenderId: "562395172269",
    appId: "1:562395172269:web:7771440eccd1165a526524",
    measurementId: "G-9G592YSGNG"
};

setTimeout(()=>{
    firebase.initializeApp(firebaseConfig);
    setTimeout(()=>{  
        firebase.analytics();  
    },500)
},1000)
