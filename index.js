
function signup(e){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const user = {
        email : email,
        username : username,
        password : pass
    };

    const json = JSON.stringify(user);
    localStorage.setItem(username , json);
    // console.log(user);

}


function login(e){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const result = document.getElementById("result");

    const user =  localStorage.getItem(username);
    const data = JSON.parse(user);

    // console.log(data);

    if(username == null){
        result.innerHTML = "Wrong User!!";
    }else if(username == data.username && pass == data.password){
        result.innerHTML = "Log In Successfull!!";
    }
    else{
        result.innerHTML = "Wrong Password";
    }
}
