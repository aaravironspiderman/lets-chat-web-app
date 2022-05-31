
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
room_name = localStorage.getItem("room_name");

document.getElementsById("Welcome_user").innerHTML = "Welcome " + user_name + " to #"+ room_name;



function send()
{
  msg = document.getElementById("msg").value;
  
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    name_user = message_data['name'];
    msg = message_data['message'];
    my_likes = message_data['like'];


    name_with_tag = "<h4> "+ name_user +" </h4>";

    message_with_tag = "<h4 class = 'message_h4'> "+ msg +" </h4>";

    like_button = "<button class = 'btn btn-primary' id =  "+fierbase_message_id+" onclick = 'update_likes(this.id)' value ="+my_likes+" > Likes : "+ my_likes +" </button> <hr>";

    row = name_with_tag + message_with_tag +like_button;
    document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + row;

  } 
});
  });
 }


getData();  

function update_likes(button_id){

    new_likes = document.getElementById(button_id).value;
    updated_likes = Number(new_likes)+ 1;
    firebase.database().ref(room_name).child(button_id).update({
		like : updated_likes  
	 });

}