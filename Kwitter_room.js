const firebaseConfig = {
      apiKey: "AIzaSyCao12LA1y8-_h-dpxJJm1Oy2lCxb_0AG4",
      authDomain: "let-chat-web-app-45592.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-45592-default-rtdb.firebaseio.com/",
      projectId: "let-chat-web-app-45592",
      storageBucket: "let-chat-web-app-45592.appspot.com",
      messagingSenderId: "431439571070",
      appId: "1:431439571070:web:765040380259ea983f902f",
      measurementId: "G-DFB5DB4HTS"
    };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome: "+user_name+"!";
function addRoom(){
      room_name = document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="Kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("kwitter_page.html");
}