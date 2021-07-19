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

function addUser() {

    window.location = "sports_room.html"
    
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
    
    password = document.getElementById("password").value;
    
    localStorage.setItem("password", password);
    
    firebase.database().ref("/").child(password).update({
    purpose : "saving password"
  });
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       password = childKey;
       console.log("Password - " + password);
      row = "<div class='password' id="+password+" onclick='redirectToRoomName(this.id)' >#"+ password +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}