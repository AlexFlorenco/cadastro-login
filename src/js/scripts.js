function showKey() {
    let password = document.getElementById("password");
    let eye = document.getElementsByClassName("bi");
    if (password.type === 'password') {
        password.type = 'text';
        eye[2].setAttribute('class', 'bi bi-eye-slash-fill');
    }
    else if (password.type === 'text') {
        password.type = 'password';
        eye[2].setAttribute('class', 'bi bi-eye-fill');
    }
}