fetch("../test/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    init(data)
  })


function init(data) {
  const dataArray = Object.entries(data)
  /*   console.log(dataArray[1][1].category)
 console.log(dataArray[2])
   console.log(dataArray[2][1].img[0])
   console.log(dataArray[2][1].img[1])
   console.log(pagiNation) */

  //수정 //
  let category = ['전체'];

  const locationName = document.querySelector('.location-name'),
    buttons = document.querySelector('.buttons'),
    contents = document.querySelector(".contents"),
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
    locationName.innerHTML += `<button class = ${el}> ${el}</button>`

  });




  const makeContent = (id) => {
    const content = document.createElement("div");
    content.classList.add("content");
    console.log(id)
    content.innerHTML = `<a href="../pages/location${id}.html" class="spot${id}">
      <img class="front-img" src="${(dataArray[id - 1][1].img[0].url)}" alt="">
      <img class="front-map" src="${(dataArray[id - 1][1].img[1].url)}" alt="">
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
    while (contents.hasChildNodes()) {
      contents.removeChild(contents.lastChild);
    }
    // 글의 최대 개수를 넘지 않는 선에서, 화면에 최대 10개의 글 생성
    for (let id = (page - 1) * showContent + 1; id <= page * showContent && id <= numOfContent; id++) {
      contents.appendChild(makeContent(id));
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
    prev.innerHTML = '<div>prev</div>';
    prev.addEventListener("click", goPrevPage);

    const next = document.createElement("button");
    next.classList.add("button", "next");
    next.innerHTML = '<div>next</div>';
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


// 지역 버튼을 누르면 해당 지역만 페이지 나오게
  const locationBtn = document.querySelectorAll('.location-name>button');
  locationBtn.forEach((el, key) => {
    el.addEventListener('click', () => {
      buttons.classList.add('on'); // 버튼 안보이게 하기 
      while (contents.hasChildNodes()) {
        contents.removeChild(contents.lastChild);
      }
      let count = 0;
      let locationKey = [];
      categoryPage = el.className;
      dataArray.forEach((el, key) => {
        if (el[1].category == categoryPage) {
          locationKey.push(key)
          count++;
        }
      })
      // 지역 버튼이 전체이면 페이지 전체 보이고 버튼 보이게
      if (categoryPage == '전체') {
        buttons.classList.remove('on');
        render(page);
      }
      // 해당 지역 컨텐츠만 나오게
      else {
        for (let i = 0; i < count; i++) {
          const content = document.createElement("div");
          content.classList.add("content");
          content.innerHTML = `<a href="../pages/location${locationKey[i]+1}.html" class="">
      <img class="front-img" src="${(dataArray[locationKey[i]][1].img[0].url)}" alt="">
      <img class="front-map" src="${(dataArray[locationKey[i]][1].img[1].url)}" alt="">
      </a>
      `;
          contents.appendChild(content)
        }
      }
    })
  })





}

const pagiNation = document.querySelector('.main-pagination');


//==============================상세페이지 map투명도===========
/* window.addEventListener('load', function () {
  const frontsum = document.querySelectorAll('.front-img'),
    frontMap = this.document.querySelectorAll('.front-map');
  console.log(frontMap[0])
  console.log(frontsum[0])
  frontsum[0].addEventListener('mouseenter', function () {
    frontMap[0].classList.add('on')
  })
}) */