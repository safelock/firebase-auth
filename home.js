window.onload = function () {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var email = user.email;
    var uid = user.uid;
    document.getElementById("emailDis").innerHTML = email
  } else {
    // User is signed out.
    // ...
  }
});
}