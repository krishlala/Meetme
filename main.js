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
                                 
} else if (password == password2 && location1 == "Florida") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_flo.html";
                                     
} else if (password == password2 && location1 == "Georgia") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_geo.html";
                                         
} else if (password == password2 && location1 == "Hawaii") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_haw.html";
                                             
                                             
} else if (password == password2 && location1 == "Idaho") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ida.html";
} else if (password == password2 && location1 == "Illinois") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ill.html";
                                                     
 } else if (password == password2 && location1 == "Indiana") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ind.html";
                                                         
} else if (password == password2 && location1 == "Iowa") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_iowa.html";
                                                             
} else if (password == password2 && location1 == "Kansas") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_kan.html";
                                                                 
 } else if (password == password2 && location1 == "Kentucky") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ken.html";
                                                                     
  } else if (password == password2 && location1 == "Louisiana") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_lou.html";
                                                                         
     } else if (password == password2 && location1 == "Maine") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_maine.html";
         
         } else if (password == password2 && location1 == "Maryland") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_mary.html";
             
    } else if (password == password2 && location1 == "Minnesota") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_min.html";
        
        } else if (password == password2 && location1 == "Missouri") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_misso.html";
            
            } else if (password == password2 && location1 == "Mississippi") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_mis.html";
                
                } else if (password == password2 && location1 == "Montana") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_mon.html";
                    
                    } else if (password == password2 && location1 == "Nebraska") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_neb.html";
                        
                        } else if (password == password2 && location1 == "Nevada") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_nev.html";
                            
                            } else if (password == password2 && location1 == "New Hampshire") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_newhamp.html";
                                
                                } else if (password == password2 && location1 == "New Jersey") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_newjer.html";
                                    
                                    
                                    } else if (password == password2 && location1 == "New Mexico") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_newmex.html";
                                        
                                        
                                        } else if (password == password2 && location1 == "New York") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_newyork.html";
                                            
                                            
} else if (password == password2 && location1 == "North Carolina") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_norcal.html";
                                                
                                                
} else if (password == password2 && location1 == "North Dakota") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_nordak.html";
                                                    
                                                    
 } else if (password == password2 && location1 == "Ohio") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ohio.html";
                                                        
                                                        
} else if (password == password2 && location1 == "Oklahoma") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_okla.html";
    
    } else if (password == password2 && location1 == "Oregon") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ore.html";
        
        } else if (password == password2 && location1 == "Pennsylvania") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_penn.html";
            
            } else if (password == password2 && location1 == "Rhode Island") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_rhodeisland.html";
                
                
                } else if (password == password2 && location1 == "South Carolina") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_socal.html";
                    
                    
                    } else if (password == password2 && location1 == "South Dakota") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_sodak.html";
                        
                        
                        } else if (password == password2 && location1 == "Tennessee") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_tenn.html";
                            
                            } else if (password == password2 && location1 == "Texas") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_tex.html";
                                
                                } else if (password == password2 && location1 == "Utah") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_utah.html";
                                    
                                    } else if (password == password2 && location1 == "Vermont") {
    console.log("In IF");
         user_name = document.getElementById("user_name").value;
         localStorage.setItem("user_name", user_name);
          window.location = "sports_room_ver.html";
            
} else {
        console.log("In ELSE");
}

}
