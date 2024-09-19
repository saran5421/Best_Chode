


class UserSession{
    checkLogin(userid, userpswd){
        if(userid == userid && userpswd == userpswd){
            sessionStorage.setItem("userid", userid);
            window.location.href = "./index.html";
        }else{
            sessionStorage.removeItem("userid");
            alert("Invalid UserName/PassWord");
        }
    }

    verifySession(){
        let user = sessionStorage.getItem("userid") || "";
        if(user == ""){
            alert("Session Expired/ Not logged In.. Please login again");
          window.location.href = "./index.html";
        }
    }

    logOut(){
        let user = sessionStorage.getItem("userid");
        if(user == user){
            sessionStorage.removeItem("userid");
            alert("Log Out");
            window.location.href = "./index.html";
        }
    }
}