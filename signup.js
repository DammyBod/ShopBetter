

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//
document.getElementById('RegForm').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    //send message values
    sendMessage(username, email, password);

    //Show Alert Message
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Five Seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);

    //Form Reset After Submission
    document.getElementById('RegForm').reset();

}



//Send Message to Firebase(4)
function sendMessage(username, email, password, bio, job, interest) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
        username: username,
        email: email,
        password: password
    });
}



const togglePassword = document.querySelector('#togglePassword');
const UserPassword = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});