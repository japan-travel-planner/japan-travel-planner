const input = document.querySelector('#first'),
    input_One = input.querySelector('input'),
    password1 = document.querySelector('#second'),
    password_One = password1.querySelector('input'),
    form = document.querySelector('.inbtn'),
    check_1 = document.querySelector('#login1'),
    check_id = check_1.querySelector('input'),
    check_2 = document.querySelector('#login2'),
    check_password = check_2.querySelector('input'),
    loginBtn = document.querySelector('.loginbutton');

//================ 회원가입 기능 =================//
const signUP = () => {
    console.log("Start-SignUp")
    let currentId = input_One.value,
        currentPassword = password_One.value;
    localStorage.setItem(currentId, currentPassword)
}


/////============= 로그인 기능 ==================//
const CheckValue = () => {
    const ID = check_id.value,
        PASSWORD = check_password.value;
    if (localStorage.getItem(ID) == PASSWORD) {
        alert("로그인 성공")
    } else {
        alert("아이디와 비밀번호를 확인해주세요.")
    }
}
loginBtn.addEventListener('click', CheckValue)


//======== 로컬스토리지 초기화 버튼 =====================//
const clearBtn = document.querySelector('.Clearbutton');

const clearLocal = () => {
    localStorage.clear();
}

clearBtn.addEventListener('click', clearLocal)

const init = () => {
    form.addEventListener('click', signUP)
    loginBtn.addEventListener('click', CheckValue)
    clearBtn.addEventListener('click', clearLocal)
}

init();