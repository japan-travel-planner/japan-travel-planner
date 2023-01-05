fetch("../test/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const regex = /(?:\/pages)\/(location\d{1,2})/;
    const url = window.location.href;

    url.match(regex);
    const result = url.match(regex);
    const urlParams = new URL(location.href).searchParams;
    const name = urlParams.get('local');
    
    init(data[name] ,data);
  });

function init(location,data) {
  locationbox(data);
  mainTop.innerHTML += `
  <div class="post-img" style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)),url('${location.post}')";></div>
    <article class="line01">
    <span>visit ${location.category}</span>
    <h2>${location.place}</h2>
    <p>${location.title}</p>
    </article>

    `;
  contentText.innerHTML += `
  <div class="ex-box">
      <span>/</span>
      <p class="location-id">${location.id}</p>
      <span >/</span>
    </div>
    <span class="location-topic">${location.topic}</span>
    <p class="location-detail"> ${location.detail}</p>
  `
  location.spot.forEach(function (el, key) {
    contents.innerHTML += `<div class="trail-cont" style="background-image: url('../img/sub-location-img/${key}.svg')"></div>`;

    contents.innerHTML += `
    <section class="content-zone ${key}">
    <div class="text_content">
    <div class="title">${location.spot[key].title}</div>
    <div class="detail">${location.spot[key].detail}</div>
    </div>
    <div class="spot_main"></div>
    <div class="spot_sub"></div>       
    </section>`;


    const lists = document.querySelectorAll(".spot_main"),
      sidebarLists = document.querySelector(".sidebar > ul");


    lists[key].innerHTML += `
    <img src="${location.spot[key].img[0].url}" alt="">
    `;
    const nail = document.querySelectorAll(".spot_sub");

    for (let i = 0; i < location.spot[0].img.length; i++) {
      nail[key].innerHTML += `
      <img src="${location.spot[key].img[i].url}" alt="">
      `;
    }
    sidebarLists.innerHTML += `
        
        <li>
        <svg width="104" height="78" viewBox="0 0 104 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1171 0.047966C12.9444 0.163719 11.7869 0.742493 10.9464 1.6333C10.3827 2.23221 9.94988 3.00223 9.72843 3.80244C9.62274 4.16984 9.61771 4.32586 9.59758 6.29369L9.58248 8.39741H8.61618C6.75404 8.39741 5.74244 8.60879 4.42888 9.25802C2.21444 10.3552 0.674397 12.3482 0.115755 14.8495L0 15.3679V43.1993V71.0308L0.110722 71.5391C0.815316 74.7148 3.2059 77.1155 6.32625 77.7949C6.59299 77.8503 7.11137 77.9207 7.47877 77.9509C8.35448 78.0164 94.9944 78.0164 95.9053 77.9509C97.0327 77.8704 97.999 77.6087 98.9351 77.1406C100.898 76.1542 102.337 74.5035 103.017 72.4601C103.238 71.7958 103.334 71.3227 103.399 70.5728C103.439 70.1601 103.45 61.6194 103.434 42.7715C103.419 13.3497 103.434 15.4584 103.173 14.4368C102.483 11.7392 100.304 9.49456 97.6266 8.72454C96.8113 8.49303 96.3935 8.43767 95.085 8.41251L93.8369 8.38231V6.66611C93.8369 4.34599 93.7614 3.81251 93.3084 2.88647C92.6139 1.46219 91.3406 0.470718 89.7351 0.103325C89.4231 0.0328674 88.492 0.0227966 81.3555 0.00770569C75.8496 -0.00739288 73.1268 0.00267029 72.694 0.0429306C71.9793 0.103325 71.4861 0.224113 70.9627 0.465691C70.6607 0.606606 70.4494 0.737457 69.7599 1.21558C69.7297 1.23571 64.5308 1.83965 58.2045 2.55934C51.8783 3.27903 46.5485 3.89304 46.3522 3.92323C44.0069 4.30573 42.1951 5.95649 41.8378 8.04511L41.7774 8.39741H38.6168H35.4562V6.59063C35.4562 4.65803 35.421 4.2403 35.2197 3.59106C34.7868 2.22717 33.8507 1.14008 32.5724 0.526085C31.9936 0.249275 31.4853 0.10836 30.8461 0.0429306C30.2372 -0.0174637 14.7311 -0.0124283 14.1171 0.047966ZM30.6398 4.29063C30.8814 4.38122 31.0122 4.49697 31.133 4.73351C31.2236 4.90463 31.2286 5.05058 31.2286 6.66109V8.39741H22.4917H13.7597L13.7748 6.64599C13.7899 4.75868 13.7899 4.74861 14.0768 4.48691C14.3737 4.21011 13.8755 4.2252 22.4967 4.2252C29.0746 4.2252 30.4838 4.23527 30.6398 4.29063ZM89.1916 4.38122C89.3124 4.46175 89.4382 4.60266 89.5036 4.73351C89.6043 4.94993 89.6093 5.02542 89.6093 6.67619V8.39741H80.8774H72.1454V6.68625C72.1454 5.35758 72.1605 4.93483 72.2159 4.80901C72.3014 4.60266 72.548 4.36612 72.7594 4.2856C72.8852 4.2403 74.8682 4.23023 80.9579 4.23527L88.9852 4.24533L89.1916 4.38122ZM67.9179 7.03854V8.39741H57.1124C46.4479 8.39741 46.3019 8.39237 46.4277 8.29675C46.4982 8.24642 46.6492 8.17596 46.7649 8.14073C46.8807 8.11053 51.682 7.54686 57.4345 6.88757C63.187 6.22826 67.8977 5.68975 67.9078 5.68472C67.9128 5.67969 67.9179 6.28866 67.9179 7.03854ZM96.4791 12.786C97.7826 13.2339 98.6986 14.1902 99.1012 15.5188C99.1867 15.8057 99.1968 16.2788 99.2069 24.1099L99.222 32.4039H83.0968H66.9717L67.8877 33.3199C69.3673 34.8046 70.4041 36.1333 71.4509 37.8796C71.8887 38.6094 72.7091 40.2853 73.0262 41.0855C74.7877 45.5396 75.1047 50.3812 73.9522 55.0516C73.5496 56.6722 73.0614 57.9958 72.2712 59.6063C71.0634 62.0523 69.5988 64.0654 67.6461 65.9577C67.2686 66.3251 66.9616 66.6372 66.9616 66.6523C66.9616 66.6674 74.2189 66.6774 83.0918 66.6774H99.222V68.3986C99.222 69.3498 99.1968 70.2709 99.1716 70.452C99.0207 71.3982 98.5073 72.2991 97.7876 72.8829C97.385 73.205 96.7005 73.5422 96.2174 73.6579C95.8399 73.7435 94.2999 73.7485 51.6619 73.7485C9.58751 73.7485 7.4838 73.7435 7.15163 73.6579C5.75754 73.3006 4.66542 72.2236 4.29803 70.8295C4.19737 70.4621 4.1873 70.2608 4.16717 68.5547L4.14201 66.6774H20.2772C29.1501 66.6774 36.4124 66.6674 36.4124 66.6573C36.4124 66.6472 36.0098 66.2295 35.5166 65.7363C34.5754 64.7951 33.9413 64.0604 33.2317 63.1041C30.6851 59.6717 29.1501 55.5549 28.8129 51.2569C28.7474 50.4214 28.7474 48.6096 28.8129 47.7742C29.1148 43.9643 30.3227 40.3759 32.4013 37.1247C33.2518 35.8011 34.2886 34.5278 35.5417 33.2746L36.4074 32.4039L20.2923 32.3939L4.17724 32.3788L4.16214 24.5779C4.14704 16.4499 4.15711 15.9517 4.35842 15.3377C4.80634 13.9788 5.87833 13.0024 7.25229 12.7055C7.55929 12.6401 12.8236 12.635 51.838 12.6401L96.0765 12.6501L96.4791 12.786ZM16.8297 37.4166C19.5676 37.8193 21.8877 38.9718 23.8002 40.8893C26.1304 43.2144 27.3685 46.214 27.3685 49.5155C27.3685 52.812 26.1254 55.8216 23.8052 58.1468C21.8676 60.0895 19.477 61.252 16.6083 61.6547C15.944 61.7453 14.2731 61.7302 13.5383 61.6245C10.8759 61.242 8.60612 60.1297 6.72384 58.3028C5.73238 57.3365 5.01269 56.3853 4.42385 55.2831L4.15207 54.7647V49.5205V44.2814L4.33325 43.919C4.87177 42.8521 5.60656 41.8606 6.58796 40.8792C7.85623 39.616 9.1245 38.7755 10.73 38.1363C11.6912 37.7589 13.0652 37.4368 14.1472 37.3361C14.8116 37.2757 16.1604 37.316 16.8297 37.4166ZM89.8458 37.4116C93.7312 37.9551 97.1032 40.2954 98.9603 43.7328L99.222 44.216V49.5205V54.8251L98.925 55.3636C97.1434 58.5696 94.1388 60.784 90.641 61.4886C89.7351 61.6698 89.2469 61.7151 88.2253 61.7151C86.2876 61.7201 84.6419 61.3426 82.9408 60.5173C81.6323 59.8831 80.7767 59.2892 79.755 58.2978C77.8275 56.4407 76.6297 54.1608 76.1566 51.4783C76.066 50.9398 76.0509 50.663 76.0509 49.5155C76.0509 48.0107 76.1113 47.4923 76.4485 46.2694C77.8023 41.3372 82.1255 37.7689 87.264 37.3361C87.9183 37.2807 89.1714 37.316 89.8458 37.4116Z" fill="#7A7A7A"/>
        <path d="M27.076 14.4923C24.9773 14.7087 22.8786 15.8008 21.4895 17.3912C18.8524 20.4059 18.5705 24.7542 20.795 28.0608C22.0633 29.9531 24.016 31.2516 26.3462 31.7549C26.8092 31.8555 27.0156 31.8706 28.0322 31.8706C29.0488 31.8706 29.2552 31.8555 29.7182 31.7549C30.9512 31.4881 32.134 30.9798 33.0902 30.3054C33.7042 29.8675 34.7359 28.8409 35.1637 28.2268C35.7978 27.331 36.3716 26.0275 36.583 25.0008C36.8044 23.9238 36.8195 22.5398 36.6132 21.5131C35.7324 17.049 31.6156 14.0192 27.076 14.4923ZM29.1495 17.7284C30.4933 18.0203 31.6508 18.7601 32.4963 19.8724C32.8436 20.3203 33.2663 21.2061 33.4274 21.81C33.5482 22.263 33.5633 22.3988 33.5633 23.1689C33.5633 23.9339 33.5482 24.0748 33.4324 24.5126C32.8788 26.561 31.3891 28.0457 29.3357 28.5842C28.9431 28.6899 28.7771 28.705 28.007 28.6999C27.2672 28.6999 27.0609 28.6798 26.7337 28.5892C24.6451 28.0155 23.1856 26.561 22.632 24.5126C22.5162 24.0748 22.5011 23.9339 22.5011 23.1689C22.5011 22.3988 22.5162 22.263 22.637 21.81C22.793 21.2413 23.2158 20.3354 23.5228 19.9227C24.3935 18.7601 25.7221 17.9247 27.0508 17.7083C27.2572 17.6781 27.4635 17.6428 27.5038 17.6328C27.6799 17.5875 28.8173 17.6579 29.1495 17.7284Z" fill="#7A7A7A"/>
        <path d="M27.7555 19.6055C26.8244 19.6961 26.0191 20.0836 25.4202 20.7278C23.7695 22.5145 24.2979 25.3379 26.4721 26.3897C27.5038 26.888 28.5657 26.888 29.5924 26.3897C31.2533 25.5795 32.0183 23.7274 31.4042 21.9709C31.0117 20.8385 29.9397 19.8924 28.7972 19.676C28.4651 19.6156 27.987 19.5803 27.7555 19.6055Z" fill="#7A7A7A"/>
        <path d="M76.4827 22.4742L76.4978 29.7114L86.1256 29.7265L95.7483 29.7366V22.4893V15.2421H86.1105H76.4727L76.4827 22.4742ZM92.5777 22.4893V26.5659L86.1256 26.5558L79.6685 26.5407L79.6534 22.4742L79.6433 18.4127H86.1105H92.5777V22.4893Z" fill="#7A7A7A"/>
        <path d="M50.2527 29.7417C43.559 30.25 37.6103 34.0599 34.344 39.9281C33.121 42.1275 32.3661 44.4627 31.9987 47.1905C31.8728 48.1014 31.8728 50.9299 31.9987 51.8408C32.4466 55.1725 33.4582 57.8902 35.2297 60.5375C37.7109 64.2417 41.2892 66.9594 45.547 68.3635C46.78 68.7712 48.3 69.0933 49.7242 69.2543C50.6301 69.355 52.9603 69.3399 53.8763 69.2241C56.589 68.897 59.0299 68.1169 61.2595 66.8789C68.8489 62.6513 72.7896 54.176 71.1338 45.6555C70.0619 40.1445 66.5741 35.2577 61.6621 32.3789C60.9223 31.9511 59.4325 31.2415 58.6424 30.9445C55.9951 29.9632 53.0056 29.5303 50.2527 29.7417ZM52.7943 38.8964C55.3509 39.1782 57.6761 40.3257 59.4376 42.1778C62.1251 45.0012 63.0511 49.0728 61.8533 52.787C61.35 54.3471 60.5297 55.7161 59.3872 56.9088C58.5115 57.8198 57.6308 58.469 56.4682 59.0579C53.9417 60.3362 51.0026 60.5375 48.2647 59.6266C44.475 58.3684 41.6868 54.9863 41.1181 50.9651C41.0124 50.2152 41.0124 48.8161 41.1181 48.0612C41.8177 43.129 45.7232 39.3896 50.7056 38.8813C51.0982 38.841 52.3715 38.8511 52.7943 38.8964Z" fill="#7A7A7A"/>
        <path d="M14.47 39.3996C10.8766 39.6462 7.67067 41.8002 6.0652 45.0615C3.7652 49.7269 5.41093 55.3989 9.85491 58.1569C12.1448 59.5761 14.9984 60.014 17.6407 59.3547C19.3971 58.9168 21.0429 57.9807 22.3413 56.6822C23.9015 55.1271 24.8879 53.1442 25.2151 50.9348C25.3258 50.1798 25.3258 48.8512 25.2151 48.0963C24.44 42.8068 19.7847 39.0372 14.47 39.3996ZM16 46.2945C16.5989 46.4455 17.0518 46.7072 17.5149 47.1753C18.1742 47.8346 18.4963 48.5995 18.4963 49.5155C18.4963 50.4265 18.1792 51.1914 17.5149 51.8608C16.8656 52.5151 16.1057 52.8372 15.1897 52.8372C14.5707 52.8372 14.2838 52.7718 13.7151 52.5C12.8444 52.0823 12.1952 51.2871 11.9536 50.3409C11.6567 49.1884 11.9838 48.0258 12.8343 47.1753C13.6849 46.3247 14.8475 45.9976 16 46.2945Z" fill="#7A7A7A"/>
        <path d="M87.4145 39.4045C84.3395 39.631 81.4859 41.3321 79.7244 43.9793C79.3771 44.4977 78.8487 45.5596 78.6474 46.1434C77.3892 49.7721 78.2598 53.7833 80.9021 56.5312C83.3329 59.0577 86.8207 60.1498 90.253 59.4552C93.4942 58.7959 96.227 56.5614 97.5456 53.4863C99.4581 49.0273 97.908 43.8183 93.8666 41.1056C91.9692 39.8273 89.7045 39.2334 87.4145 39.4045ZM88.8489 46.2441C90.0215 46.4655 91.0231 47.3614 91.4056 48.534C91.5163 48.8763 91.5364 49.0273 91.5364 49.5154C91.5364 50.0036 91.5163 50.1546 91.4056 50.4968C91.2244 51.0454 90.9576 51.4833 90.5601 51.8758C89.9309 52.4999 89.2767 52.7868 88.3959 52.827C87.7215 52.8572 87.2384 52.7566 86.6848 52.4747C85.3813 51.8054 84.6465 50.2804 84.9485 48.8612C85.0491 48.3831 85.4064 47.6583 85.7084 47.3111C86.1362 46.8279 86.8056 46.4253 87.4397 46.2693C87.7769 46.1887 88.4865 46.1736 88.8489 46.2441Z" fill="#7A7A7A"/>
        </svg>
        </li>
        `;

  });
    sideBar();
    thum();
  
}
const contents = document.querySelector(".contents"),
  mainTop = document.querySelector(".main-top"),
  contentText = document.querySelector('.content-text');
//================================ 우측사이드바============================
function sideBar() {
 
    // 각 컨텐츠를 Section으로 정했을 때 사이드 바 클릭시 해당 컨텐츠로 이동 해당 컨텐츠 위치 확인
    const elSection = document.querySelectorAll("main > section"),
      elSidebarBtn = document.querySelectorAll(".sidebar > ul >li");
    //console.log(elSection + '리스트');
    let idx = 0;
    let pos = { y: 0, y2: 0, state: true };
    let play;
    let start = 0;
    let startBtn = 0;
    let sectionArry = []; // 각 컨텐츠의 offsetTop 값
    let btnIdx = 0;
    elSidebarBtn.forEach((el, key) => {
      el.addEventListener("click", () => {
        //가는길 다 표시
        /* for (let i = 0; i < elSidebarBtn.length; i++) {
            elSidebarBtn[i].classList.remove('on')
        }
        for (let i = 0; i < key + 1; i++) {
            elSidebarBtn[i].classList.add('on')
        } */
        // 지금있는곳만 표시
        elSidebarBtn[idx].classList.remove("on");
        el.classList.add("on");
        idx = key;
        scrollTo(0, elSection[key].offsetTop - elSection[idx].clientHeight / 4);
      });
    });

    //스크롤 이벤트 시 페이지네이션 이벤트
    window.addEventListener("scroll", function () {
      // 스크롤 up ,down  확인
      pos.y = window.pageYOffset;
      pos.state = pos.y > pos.y2 ? true : false;
      clearTimeout(play);
      pos.y2 = pos.y;
      play = setTimeout(function () {
        elSection.forEach((el, key) => {
          // console.log(el.clientHeight);
          // 스크롤 down 일 시 sectionArry에 각 컨텐츠의 offsetTop 저장
          // sectionArry의 length값으로 각 컨텐츠의 위치를 찾고 찾은 위치 페이지네이션에 class Add
          if (pos.state) {
            if (
              window.pageYOffset >=
              elSection[key].offsetTop - el.clientHeight / 2
            ) {
              if (!sectionArry.includes(elSection[key].offsetTop)) {
                sectionArry.push(elSection[key].offsetTop);
              }
              start = key;
              elSidebarBtn[btnIdx].classList.remove("on");
              elSidebarBtn[sectionArry.length - 1].classList.add("on");
              btnIdx = sectionArry.length - 1;
            }
          }
          // 스크롤 up 일 시 sectionArry에 각 컨텐츠의 offsetTop 삭제
          // sectionArry의 length값으로 각 컨텐츠의 위치를 찾고 찾은 위치 페이지네이션에 class remove
          else {
            if (
              window.pageYOffset + elSection[start].offsetHeight <
              elSection[start].offsetTop - el.clientHeight * 0.95
            )
              if (sectionArry.indexOf(elSection[start].offsetTop) != -1) {
                if (start > 0) {
                  elSidebarBtn[sectionArry.length - 1].classList.remove("on");
                  sectionArry.splice(
                    sectionArry.indexOf(elSection[start].offsetTop)
                  );
                  start--;
                  elSidebarBtn[sectionArry.length - 1].classList.add("on");
                }
              }
          }
        });
      }, 100);
    });


}
//===========================사이드바 hide&show==================
const sideNav = document.querySelector(".sidebar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    sideNav.style = "display:block;";
  } else {
    sideNav.style = "display:none;";
  }
});

function thum(){
//======================썸네일 이미지 클릭시 메인이미지 변경==================
const spotZone = document.querySelectorAll('.content-zone'),
spotMainImg = document.querySelectorAll('.spot_main > img'),
spotSubImg = document.querySelectorAll('.content-zone > .spot_sub');
// let key = 3;
//=================잘되는거 보존==========
// spotSubImg.forEach(function (el, key) {
//   spotSubImg[key].addEventListener('click', () => {

//     spotImgbox = spotSubImg[key].querySelectorAll('img');

//     spotImgbox.forEach(function (el, key) {
//       console.log(spotImgbox[key], 'img')
//       spotMainImg[0].src = spotImgbox[key].src
//     })

//     console.log(el, 'el')
//     console.log(key)

//     console.log(spotMainImg[key].src)
//     spotMainImg[0].src = `${spotMainImg[key].src}`
//   })
// })
// ========================수정 =======================
spotSubImg.forEach(function (el, key) {
const spotImgbox = spotSubImg[key].querySelectorAll('img');
spotImgbox.forEach(function (img, ikey) {
  img.addEventListener('click', () => {
    console.log(ikey, "ikey")
    spotMainImg[key].src = `${spotImgbox[ikey].src}`
  })
})
})

}
function locationbox(data){
  const dataArray = Object.entries(data)
  //다른여정 js//
  let category = ['전체'];

  const locationName = document.querySelector('.location-name'),
    buttons = document.querySelector('section.content-box .buttons'),
    secContents = document.querySelector("section.content-box .contents"),
    numOfContent = dataArray.length,
    showContent = 4,
    showButton = 5,
    maxPage = Math.ceil(numOfContent / showContent);
  let page = 1;
  let categoryPage = '전체';
  //지역 리스트//
  dataArray.forEach(function (el, key) {
    if (!category.includes(el[1].category)) {
      category.push(el[1].category)
    }

  });
  category.forEach(function (el, key) {
    if (key == 0) {
      locationName.innerHTML += `<button class = "${el} on" > ${el}</button>`
    } else {
      locationName.innerHTML += `<button class = ${el}> ${el}</button>`
    }
  });
  // 지역 버튼을 누르면 해당 지역만 페이지 나오게
  const locationBtn = document.querySelectorAll('.location-name > button');
  let btnIdx = 0;
  locationBtn.forEach((el, key) => {
    el.addEventListener('click', () => {
      buttons.classList.add('on'); // 버튼 안보이게 하기 
      locationBtn[btnIdx].classList.remove('on');
      el.classList.add('on');
      btnIdx = key;
      while (secContents.hasChildNodes()) {
        secContents.removeChild(secContents.lastChild);
      }
      let count = 0;
      let locationKey = [];
      categoryPage = el.className.split(" ");
      dataArray.forEach((el, key) => {
        if (el[1].category == categoryPage[0]) {
          locationKey.push(key)
          count++;
        }
      })

      // 지역 버튼이 전체이면 페이지 전체 보이고 버튼 보이게
      if (categoryPage[0] == '전체') {
        buttons.classList.remove('on');
        render(page);
      }
      // 해당 지역 컨텐츠만 나오게
      else {
        for (let i = 0; i < count; i++) {

          const content = document.createElement("div");
          content.classList.add("content");

          content.innerHTML = `<a href="./pages/location.html?local=location${locationKey[i] + 1}" class="">
        <img class="front-img" src=".${(dataArray[locationKey[i]][1].img[0].url)}" alt="">
        <img class="front-map" src=".${(dataArray[locationKey[i]][1].img[1].url)}" alt="">
        <div class="location-text-box">
        <h3>${(dataArray[locationKey[i]][1].category)}</h3>
        <span>${(dataArray[locationKey[i]][1].place)}</span>
        </div>
        </a>
        `;
        secContents.appendChild(content)
        }
      }
    })
  })
  const makeContent = (id) => {
    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = `<a href="./pages/location.html?local=location${id}" class="spot${id}">
      <img class="front-img" src=".${(dataArray[id - 1][1].img[0].url)}" alt="">
      <img class="front-map" src=".${(dataArray[id - 1][1].img[1].url)}" alt="">
      <div class="location-text-box">
          <h3>${(dataArray[id - 1][1].category)}</h3>
          <span>${(dataArray[id - 1][1].place)}</span>
      </div>
      </a>
      `;
    return content;
  };

  const makeButton = (id) => {
    const button = document.createElement("button");
    button.classList.add("button");
    button.dataset.num = id;
    button.innerText = id;
    button.addEventListener("click", (e) => {
      Array.prototype.forEach.call(buttons.children, (button) => {
        if (button.dataset.num) button.classList.remove("active");
      });
      e.target.classList.add("active");
      renderContent(parseInt(e.target.dataset.num), 'ALL');
    });
    return button;
  };


  const renderContent = (page) => {
    // 목록 리스트 초기화
    while (secContents.hasChildNodes()) {
      secContents.removeChild(secContents.lastChild);
    }
    // 글의 최대 개수를 넘지 않는 선에서, 화면에 최대 10개의 글 생성
    for (let id = (page - 1) * showContent + 1; id <= page * showContent && id <= numOfContent; id++) {
      secContents.appendChild(makeContent(id));
    }
  };
  const renderButton = (page) => {
    // 버튼 리스트 초기화
    while (buttons.hasChildNodes()) {
      buttons.removeChild(buttons.lastChild);
    }
    // 화면에 최대 5개의 페이지 버튼 생성
    for (let id = page; id < page + showButton && id <= maxPage; id++) {
      buttons.appendChild(makeButton(id));
    }
    // 첫 버튼 활성화(class="active")
    buttons.children[0].classList.add("active");
    const goPrevPage = () => {
      page -= showButton;
      render(page);
    };

    const goNextPage = () => {
      page += showButton;
      render(page);
    };
    const prev = document.createElement("button");
    prev.classList.add("button", "prev");
    prev.innerHTML = '<div><img src = "../img/com/leftArrow.svg"></div>';
    prev.addEventListener("click", goPrevPage);

    const next = document.createElement("button");
    next.classList.add("button", "next");
    next.innerHTML = '<div><img src = "../img/com/rightArrow.svg"></div>';
    next.addEventListener("click", goNextPage);

    buttons.prepend(prev);
    buttons.append(next);

    // 이전, 다음 페이지 버튼이 필요한지 체크
    if (page - showButton < 1) buttons.removeChild(prev);
    if (page + showButton > maxPage) buttons.removeChild(next);
  };
  const render = (page) => {
    renderContent(page);
    renderButton(page);

  };
  render(page);

}