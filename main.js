// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAdaUxS5pIAvy0yjJIL2scAT6qsgZEHmDw",
    authDomain: "login-8d8c3.firebaseapp.com",
    projectId: "login-8d8c3",
    storageBucket: "login-8d8c3.appspot.com",
    messagingSenderId: "664217504416",
    appId: "1:664217504416:web:1c0bd64189f1778b6d17c5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function start(){
    window.location.replace("choose.html");

}

function choose(){
    window.location.replace("choose.html");

}

function quiz(){
    window.location.replace("quiz.html");

}

function addUser() {
    password3 = localStorage.getItem("password", password);
    var password = password3;
    password2 = document.getElementById("password").value;
    console.log("Password22="+password2);
    console.log("Password ="+ password);
    location1 = document.getElementById("Location").value;
    
    if (password == password2 && location1 == "Georgia") {
        console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_geo.html";
} else if (password == password2 && location1 == "Alabama") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ala.html";
    
    } else if (password == password2 && location1 == "California") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_cali.html";
        
        } else if (password == password2 && location1 == "Alaska") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_alaska.html";
            
            } else if (password == password2 && location1 == "Arizona") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ari.html";
                
                } else if (password == password2 && location1 == "Arkansas") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ark.html";
                    
                    } else if (password == password2 && location1 == "Colorado") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_colo.html";
                        
                        } else if (password == password2 && location1 == "Connecticut") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_con.html";
                            
                             } else if (password == password2 && location1 == "Delaware") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_del.html";
            
} else {
        console.log("In ELSE");
}

}
