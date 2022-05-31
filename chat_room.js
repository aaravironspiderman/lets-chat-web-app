
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBObEDxDL2vAHI0iZ2gf1dLvxUZYDhnz7I",
      authDomain: "kwitter-80ecb.firebaseapp.com",
      databaseURL: "https://kwitter-80ecb-default-rtdb.firebaseio.com",
      projectId: "kwitter-80ecb",
      storageBucket: "kwitter-80ecb.appspot.com",
      messagingSenderId: "392729449141",
      appId: "1:392729449141:web:c196d9935024e3bb9ea4fc"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User_name");
document.getElementsById("Welcome_user").innerHTML = "Welcome " + user_name;


function addroom(){
      new_room = document.getElementById("new_room").value;
      firebase.database().ref("/").child(new_room).update({
            purpose: "adding new room"
      });
      document.getElementById("new_room").value = "";
      localStorage.setItem("room_name", new_room);
      window.location = "chat_page.html";


}
    
function logout(){
      localStorage.removeItem("User_name")
      window.location = "index.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("User_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
