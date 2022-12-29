fetch("../test/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // const regex = /(?:\/pages)\/(location\d{1,2})/;
    // const url = window.location.href;
    // console.log(url)
    // url.match(regex)
    // const result = url.match(regex);
    // console.log(url.match(regex))
    // console.log(result[1])
    // const links = result[1]
    // console.log(data[links])
    init(data[links]);
    // init(data.location2);
    console.log(data)
  console.log(Object.keys(data).length)
  const locaData = Object.keys(data),
  mainPages = document.querySelector('.main-pagination')
  console.log(locaData)
  locaData.forEach(function(el,key){
    // console.log(el,key)
    mainPages.innerHTML += `<a href="./location${key+1}.html">sub${key+1}</a>`
  })
  
  });
  
  console.log(window.location.href)
function init(location) {

  location.spot.forEach(function (el, key) {

    // console.log(key)
    contents.innerHTML += `
    <section class="content_${key}">
    <div class="text_content">
    <div class="title">${location.spot[key].title}</div>
    <div class="detail">${location.spot[key].detail}</div>
    </div>
    <div class="spot_main"></div>
    <div class="spot_sub"></div>
    
    </section>`
    ;
    const lists = document.querySelectorAll(".spot_main");
    
    lists[key].innerHTML += `
    <img src="${location.spot[key].img[0].url}" alt="">
    `;
    const nail = document.querySelectorAll('.spot_sub');

    for (let i = 0 ; i<location.spot[0].img.length ; i++){
      nail[key].innerHTML += `
      <img src="${location.spot[key].img[i].url}" alt="">
      `
        }
  });  

}

const data = [
  {
    area: "spot01"
  },
  {
    area: "spot02"
  },
  {
    area: "spot03"
  },
  {
    area: "spot04"
  },
  {
    area: "spot05"
  },
  {
    area: "spot06"
  },
  {
    area: "spot07"
  },
  {
    area: "spot08"
  },
  {
    area: "spot09"
  },
  {
    area: "spot10"
  },
];

const contents = document.querySelector(".contents"),
  buttons = document.querySelector(".buttons");
const numOfContent = data.length,
  showContent = 6,
  showButton = 3,
  maxPage = Math.ceil(numOfContent / showContent);
let page = 1;

const makeContent = (id) => {
  // console.log(id);
  const content = document.createElement("li");
  //   console.log(data);
  content.classList.add("content");
  content.innerHTML = `
          <span class="content_title">${data[id - 1].area}</span>
        `;
  return content;
};
const makeButton = (id) => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.dataset.num = id;
  button.innerText = id;
  button.addEventListener("click", (e) => {
    data.forEach.call(buttons.children, (button) => {
      if (button.dataset.num) button.classList.remove("active");
    });
    e.target.classList.add("active");
    renderContent(parseInt(e.target.dataset.num));
  });
  return button;
};

// console.log(contents.hasChildNodes());

const renderContent = (page) => {
  //목록 리스트 초기화
  while (contents.hasChildNodes()) {
    contents.removeChild(contents.lastChild);
  }

  // 글의 최대 개수를 넘지 않는 선에서, 화면에 최대 showContent 만큼의 글 생성
  for (
    let id = (page - 1) * showContent + 1;
    id <= page * showContent && id <= numOfContent;
    id++
  ) {
    contents.appendChild(makeContent(id));
  }
};

const renderButton = (page) => {
  // 버튼 리스트 초기화
  while (buttons.hasChildNodes()) {
    buttons.removeChild(buttons.lastChild);
  }
  // 화면에 최대 showButton의 페이지 버튼 생성
  for (let id = page; id < page + showButton && id <= maxPage; id++) {
    buttons.appendChild(makeButton(id));
  }
  // 첫 버튼 활성화 (class = "active")
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
  prev.innerHTML =
    '<img src="./assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz24.svg" alt="" />';
  prev.addEventListener("click", goPrevPage);

  const next = document.createElement("button");
  next.classList.add("button", "next");
  next.innerHTML =
    '<img src="./assets/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.svg" alt="" />';
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

// render(page);
