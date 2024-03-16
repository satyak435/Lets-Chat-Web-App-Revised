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
    room_name=localStorage.getItem("room_name");
//YOUR FIREBASE LINKS
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4>"+message+"</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id);'>";
span_with_tag="<span class=glyphicon glyphicon-thumbs-up>like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
    } });  }); }
getData();
function updateLike(message_id){
    console.log("click on the like button-"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes,
});
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location("kwitter_page.html");
}