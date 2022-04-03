function signup(){

    var name = document.getElementById('name');
    var email = document.getElementById("mail").value;
    var pwd = document.getElementById('pwd');
    var cpwd = document.getElementById("cpwd").value;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pwd.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pwd.value.length == 0){
        alert('Please fill in email and password');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem("email", email.value)
        localStorage.setItem('pwd', pwd.value);
        localStorage.setItem("cpwd",cpwd.value)
    
        alert('Your account has been created');
        window.location="login.html";
    }
}
function login(){
    var storedName = localStorage.getItem('name');
    var storedPwd = localStorage.getItem('pwd');

    var userName = document.getElementById('name');
    var userPwd = document.getElementById('pwd');

    if(userName.value == storedName && userPwd.value == storedPwd){
        alert('You are logged in.');
        window.location="list.html";
    }else{
        alert('Error on login');
    }
}
