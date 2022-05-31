function Log_IN(){

name_user = document.getElementById("user_name").value;

localStorage.setItem("User_name", name_user);

window.location = "chat_room.html";

}