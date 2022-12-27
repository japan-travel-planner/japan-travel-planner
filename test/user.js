const userId = document.querySelector(".userid"),
  userPass = document.querySelector(".userpassword"),
  userSignup = document.querySelector(".signup");
  console.log('aaaa')
  localStorage.setItem('userID2','fire')

  document.querySelector('.signup').addEventListener('click',()=>{
    console.log('cls')
    userId.innerHTML = '<div>안녕</div>'
    console.log(userId.value)
    console.log(userPass.value)
    localStorage.setItem('UserId',userId.value)
    localStorage.setItem('UserPassword',userPass.value)
  })

// window.addEventListener("submit", () => {
//   e.preventDefalult();
//   console.log(userId.value);
//   console.log(userPass.value);
//   localStorage.setItem('userID3','fire')
 

//   //   if (userId.value && userPass.value) {
//   //     localStorage.setItem(userId.value, userPass.value);
//   //   }
//   //   //   localStorage.setItem(userPass, userPass.value);
//   //   console.log("aaa");

//   // const loginId = document.querySelector("#userIdtxt"),
//   //   loginPass = document.querySelector("#userPasswordtxt"),
//   //   login = document.querySelector("login");

//   // console.log(loginId.value, "loginId.value");
//   // console.log(localStorage.getItem(loginId.value), "userId.value");
//   // console.log(loginPass.value, "loginPass.value");
//   // console.log(userPass.getItem, "userPass.value");

//   // if (loginId.value == localStorage.getItem(loginId.value)) {
//   //   alert("같은 아이디입니다.");
//   // } else {
//   //   alert("아이디를 확인해주세요");
//   // }
//   //   if (loginId.value == userId.value && loginPass == userPass) {
//   //     alert("로그인 되었습니다.");
//   //   } else {
//   //     alert("ID와 PASSWORD를 확인해주세요.");
//   //   }
// });

// console.log(localStorage.getItem("first"));
