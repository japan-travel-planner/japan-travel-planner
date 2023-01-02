fetch("../test/data.json")
.then(function (res) {
  return res.json();
})
.then(function(data){
  init(data)  
})


function init (data) {
  const dataArray = Object.entries(data)
  console.log(dataArray)
  console.log(dataArray[2])
  console.log(dataArray[2][1].img[0])
  console.log(dataArray[2][1].img[1])
  console.log(pagiNation)
  
  //수정 //
  let category = [];

  const locationName = document.querySelector('.location-name'),
  buttons =document.querySelector('.buttons'),
  contents = document.querySelector(".contents"),
  numOfContent = dataArray.length,      
  showContent = 4,
  showButton = 5,
  maxPage = Math.ceil(numOfContent / showContent);
  let page = 1;

  
  dataArray.forEach(function(el,key){
    // pagiNation.innerHTML += `<div class="spot${key+1}"><a href="">
    // <img src="${(dataArray[key][1].img[0].url)}" alt=""></a></div>
    // `
    if(!category.includes(el[1].category)){
      category.push(el[1].category)
    }
    
  })
  category.forEach(function(el,key){
    locationName.innerHTML +=`<button class = ${el}> ${el}</button>`
  })
  
 
        
        const makeContent = (id) => {
          const content = document.createElement("div");
          content.classList.add("content");

          content.innerHTML = `<a href="" class="spot${id}">
          <img class="front-img" src="${(dataArray[id-1][1].img[0].url)}" alt="">
          <img class="front-map" src="${(dataArray[id-1][1].img[1].url)}" alt="">
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
            renderContent(parseInt(e.target.dataset.num));
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
            console.log(id,'id')
            
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






      
       
}

const pagiNation = document.querySelector('.main-pagination');


//==============================상세페이지 map투명도===========
window.addEventListener('load',function(){
  const frontsum = document.querySelectorAll('.front-img'),
frontMap = this.document.querySelectorAll('.front-map');
console.log(frontMap[0])
console.log(frontsum[0])
  frontsum[0].addEventListener('mouseenter',function(){
    console.log('aaa')
    frontMap[0].classList.add('on')
  })
})