function handleAuthChanges() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = "home.html";
    } else {
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
      }).catch(function (error) {
        console.log(error)
        alert("An error has occoured")
      });
    }
  });

}


function handleSignIn() {
  const email= document.getElementById("email").value
  const pass = document.getElementById("password").value
  console.log(email)
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {

    var errorCode = error.code;
    var errorMessage = error.message;

    alert(errorMessage);
  });

}

function handleSignUp() {
  const email = document.getElementById("email").value
  const pass = document.getElementById("password").value
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    alert(errorMessage);
  });
}

window.onload = () =>{
  handleAuthChanges()
}