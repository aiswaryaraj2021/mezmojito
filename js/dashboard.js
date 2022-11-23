username=localStorage.getItem("username")
console.log(username);
result.innerHTML ="Welcome "+username

function logout(){
    localStorage.removeItem('username')
    window.location='index.html'
}