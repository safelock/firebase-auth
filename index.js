function handleAuthChanges() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = "index.html";
    } else {
      //TODO sign out
    }
  });
}


function handleSignIn() {
  const email= document.getElementById("email").value
  const pass = document.getElementById("password").value
}

function handleSignUp() {
  const email = document.getElementById("email").value
  const pass = document.getElementById("password").value
}
