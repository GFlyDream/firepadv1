var config = {
        apiKey: "AIzaSyDre-ANs4M954zU-IEd9pznUMYm74em0wk",
        authDomain: "firepadv1.firebaseapp.com",
        projectId: "firepadv1",
        storageBucket: "firepadv1.appspot.com",
        messagingSenderId: "545461399648",
        appId: "1:545461399648:web:928223f432453a3e55d305",
        measurementId: "G-S3N0PSYJTK",
        databaseURL: "https://firepadv1-default-rtdb.firebaseio.com/"
      };
firebase.initializeApp(config);


function joinLivepad(){
  var inviteId = document.getElementById('invite').value
  if(inviteId.includes('#') || inviteId.includes('.') || inviteId.includes('$')|| inviteId.includes('[')|| inviteId.includes(']')){alertify.error("The LirePad you're trying to join does not exist!")}
  var starCountRef = firebase.database().ref('/'+inviteId);
  starCountRef.once('value', (snapshot) => {
  if (snapshot.exists()){
      alertify.success('Success! Joining LirePad');
      window.location.href="/pad/pad.html#"+inviteId
    } else {
      alertify.error('The LirePad you\'re trying to join does not exist!');
      console.log("Error..")
    }
})
  
}