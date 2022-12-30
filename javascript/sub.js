fetch("../test/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const regex = /(?:\/pages)\/(location\d{1,2})/;
    const url = window.location.href;
    console.log(url)
    url.match(regex)
    const result = url.match(regex);
    console.log(url.match(regex))
    console.log(result[1])
    const links = result[1]
    console.log(data[links])
    init(data[links]);
    // init(data.location2);
    console.log(data)
    console.log(Object.keys(data).length)
    const locaData = Object.keys(data),
      mainPages = document.querySelector('.main-pagination')
    console.log(locaData)
    locaData.forEach(function (el, key) {
      // console.log(el,key)
      mainPages.innerHTML += `<a href="./location${key + 1}.html">sub${key + 1}</a>`
    })

  });

console.log(window.location.href)
function init(location) {
 
  console.log(location.place)
 console.log(mainTop)
    mainTop.innerHTML +=`
    <article class="line01">
    <div class="01">${location.place}</div>
    <div class="02">${location.title}</div>
    </article>
    <article class="line02">
    <div class="03">${location.topic}</div>
    <div class="04">${location.detail}</div>
    </article>
    `
  location.spot.forEach(function (el, key) {

    contents.innerHTML += `<div class="trail-cont" style="background-image: url('../img/sub-location-img/${key}.svg')";></div>`;
     
    contents.innerHTML += `
    <section class="content-zone">
    <div class="text_content">
    <div class="title">${location.spot[key].title}</div>
    <div class="detail">${location.spot[key].detail}</div>
    </div>
    <div class="spot_main"></div>
    <div class="spot_sub"></div>       
    </section>`
    
    const lists = document.querySelectorAll(".spot_main"),
    
    wwiaa = document.querySelector('.sidebar > ul');
    
    lists[key].innerHTML += `
    <img src="${location.spot[key].img[0].url}" alt="">
    `;
    const nail = document.querySelectorAll('.spot_sub');

    for (let i = 0; i < location.spot[0].img.length; i++) {
      nail[key].innerHTML += `
      <img src="${location.spot[key].img[i].url}" alt="">
      `
    }

    wwiaa.innerHTML += `
        
        <li>${key + 1}</li>
        `


  });
  
  sideBar();
}


const contents = document.querySelector(".contents"),
      mainTop = document.querySelector('.main-top');



//================================ 우측사이드바============================
function sideBar() {
  window.addEventListener('load', () => {
    // 각 컨텐츠를 Section으로 정했을 때 사이드 바 클릭시 해당 컨텐츠로 이동 해당 컨텐츠 위치 확인
    elSection = document.querySelectorAll('main > section'),
    elSidebarBtn = document.querySelectorAll('.sidebar > ul >li');
    //console.log(elSection + '리스트');
    let idx = 0;
    let pos = { y: 0, y2: 0, state: true }
    let play;
    let start = 0;
    let startBtn = 0;
    let sectionArry = [];    // 각 컨텐츠의 offsetTop 값
    let btnIdx = 0;
    elSidebarBtn.forEach((el, key) => {

      el.addEventListener('click', () => {
        //가는길 다 표시
        /* for (let i = 0; i < elSidebarBtn.length; i++) {
            elSidebarBtn[i].classList.remove('on')
        }
        for (let i = 0; i < key + 1; i++) {
            elSidebarBtn[i].classList.add('on')
        } */
        // 지금있는곳만 표시
        elSidebarBtn[idx].classList.remove('on');
        el.classList.add('on')
        idx = key
        scrollTo(0, elSection[key].offsetTop);
      })

    });


    //스크롤 이벤트 시 페이지네이션 이벤트
    window.addEventListener('scroll', function () {
      // 스크롤 up ,down  확인
      pos.y = window.pageYOffset;
      pos.state = (pos.y > pos.y2) ? true : false;
      clearTimeout(play)
      pos.y2 = pos.y;
      play = setTimeout(function () {
        elSection.forEach((el, key) => {
          // 스크롤 down 일 시 sectionArry에 각 컨텐츠의 offsetTop 저장 
          // sectionArry의 length값으로 각 컨텐츠의 위치를 찾고 찾은 위치 페이지네이션에 class Add
          if (pos.state) {
            if (window.pageYOffset >= elSection[key].offsetTop) {
              if (!sectionArry.includes(elSection[key].offsetTop)) {
                sectionArry.push(elSection[key].offsetTop);
              }
              start = key;
              elSidebarBtn[btnIdx].classList.remove('on');
              elSidebarBtn[sectionArry.length - 1].classList.add('on');
              btnIdx = sectionArry.length - 1
            }

          }
          // 스크롤 up 일 시 sectionArry에 각 컨텐츠의 offsetTop 삭제
          // sectionArry의 length값으로 각 컨텐츠의 위치를 찾고 찾은 위치 페이지네이션에 class remove
          else {
            if (window.pageYOffset + elSection[start].offsetHeight / 2 < elSection[start].offsetTop)
              if (sectionArry.indexOf(elSection[start].offsetTop) != -1) {
                if (start > 0) {
                  elSidebarBtn[sectionArry.length - 1].classList.remove('on');
                  sectionArry.splice(sectionArry.indexOf(elSection[start].offsetTop));
                  start--;
                  elSidebarBtn[sectionArry.length - 1].classList.add('on');
                }
              }


          }
        })
      }, 50);
    });
  })
}