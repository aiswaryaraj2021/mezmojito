
// login and to local storage:

var database={
    "user1":{username:'user1',password:"user1",email:'user1@gmail.com'},
    "user2":{username:'user2',password:"user2",email:'user2@gmail.com'},
    "user3":{username:'user3',password:"user3",email:'user3@gmail.com'},
    "user4":{username:'user4',password:"user4",email:'user4@gmail.com'},
    "user4":{username:'Aiswarya',password:"aiswarya",email:'user4@gmail.com'}

}
function Login(){
    var username = uname.value
    var password = pswd.value
    if(username in database){
        username = uname.value
        localStorage.setItem("username",username)
        if(password==database[username]['password']){
            alert('Login successful')
            window.location="dashboard.html"
        }
        else{
            alert('Incorrect Password')
        }
    }
    else{
        alert('Cannot Login !!!')
    }
}




let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


