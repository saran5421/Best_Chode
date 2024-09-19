

// function verifySession(){
//     let user = sessionStorage.getItem('USER') || "";
//     if(user == ""){
//       alert("Session Expired/ Not logged In.. Please login again");
//       window.location.href = "./sample_2.html";
//     }
//   }

// function logOff() {
//   let user = localStorage.getItem('userdata');
//   // console.log(user);
//   if (user == user) {
//       localStorage.removeItem("userdata");
//       alert("Sign Out");
//       window.location.href = './index.html';
//       console.log(user);
//   }
// }

class UserSession{
    checkLogin(uName, pswd){
        // let uName = document.getElementById('uName').value;
        // let pswd = document.getElementById('pswd').value;

        if(uName == "uName" && pswd == "pswd"){
          sessionStorage.setItem('USER', uName);
            window.location.href = './rrapp_aboutus.html';
        }else{
            console.log(uName)
            sessionStorage.removeItem('USER');            //doubt
            console.log(uName);
            alert('Invalid Username/Password');
        }
    }

    logOff() {
      let user = localStorage.getItem('userdata');
      // console.log(user);
      if (user == user) {
          localStorage.removeItem("userdata");
          alert("Sign Out");
          window.location.href = './index.html';
          console.log(user);
      }
  }

    verifySession(){        //doubt
        let user = sessionStorage.getItem('USER') || "";
        if(user == ""){
          alert("Session Expired/ Not logged In.. Please login again");
          window.location.href = "./sample_2.html";
        }
      }
}