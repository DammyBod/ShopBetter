


function signIn() {
    //window.alert("It's working")

    var userEmail = document.getElementById("userSIEmail").value;
    var userPassword = document.getElementById("userSIPassword").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        .then((userCredential) => {
            // Signed in
            var userEmail = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage);
        });

}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        document.getElementById("user-div").style.display = "block"
        document.getElementById("login-div").style.display = "none"

        var uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
        document.getElementById("user-div").style.display = "none"
        document.getElementById("login-div").style.display = "block"
    }
});



const togglePassword1 = document.querySelector('#togglePassword1');
const userSIPassword = document.querySelector('#userSIPassword');

togglePassword1.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = userSIPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    userSIPassword.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});