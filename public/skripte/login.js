const handleLogin = (e) => {
  e.preventDefault();

const username = document.getElementById('usernameInput').value
const password = document.getElementById('passwordInput').value

fetch('http://localhost:9000/login',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify({
     username:username,
     password:password
  })
})
  .then(res => res.json())
  .then(data => {
      if(!data.message){
          localStorage.setItem("user", username)
          document.cookie = `token=${data.token};SameSiite=Lax`
          window.location.href = '/'
      }
  })
}

document.getElementById("login").addEventListener("click", handleLogin);
