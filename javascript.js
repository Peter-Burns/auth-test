var config = {
    apiKey: "AIzaSyBrrTXwSYN2js1_oHCbKM9zBnZV6EyxJ38",
    authDomain: "auth-test-3ef27.firebaseapp.com",
    databaseURL: "https://auth-test-3ef27.firebaseio.com",
    projectId: "auth-test-3ef27",
    storageBucket: "auth-test-3ef27.appspot.com",
    messagingSenderId: "8263638637"
  };
  firebase.initializeApp(config);
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorCode);
    // ...
  });