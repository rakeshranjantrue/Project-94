// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCvUyXvYwIGnjQBm5rs5Zl6A50rPHNZclg",
      authDomain: "let-s-chat-af0c7.firebaseapp.com",
      projectId: "let-s-chat-af0c7",
      storageBucket: "let-s-chat-af0c7.appspot.com",
      messagingSenderId: "1071896996181",
      appId: "1:1071896996181:web:a372532b16acdace3827dc"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
