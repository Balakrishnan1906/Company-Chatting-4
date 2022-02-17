user=localStorage.getItem("user_name");

var firebaseConfig = {
    apiKey: "AIzaSyAcJQMOFKLjjf-YTlbAGoCVek13EAgIo5A",
    authDomain: "companychatting-6ebec.firebaseapp.com",
    databaseURL: "https://companychatting-6ebec-default-rtdb.firebaseio.com",
    projectId: "companychatting-6ebec",
    storageBucket: "companychatting-6ebec.appspot.com",
    messagingSenderId: "163422526022",
    appId: "1:163422526022:web:f5ee07404c39ee28b50847"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room");
    
      function add_room(){
          room_name = document.getElementById("user_addroom").value;
          console.log(room_name);
          localStorage.setItem("room" , room_name);
          firebase.database().ref("/").child(room_name).update({
              name : "Company"
          });
          window.location = "kwitter_page.html";
      }
  
  function getData() 
  {
        firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("trending_rooms").innerHTML = "";
  snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log(Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div><hr>";
        document.getElementById("trending_rooms").innerHTML+=row;
        //End code
        });});}
  getData();
  
  function redirect(room_clicked){
        console.log(room_clicked);
        localStorage.setItem("room_ls",room_clicked);
        window.location = "kwitter_page.html";
  }
  
  function logout(){
        localStorage.removeItem("room");
        localStorage.removeItem("user_name");
        window.location = "index.html";
  }