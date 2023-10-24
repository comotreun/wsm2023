// 이번달
// 현재날짜, 시각 객체 만들자
var now = new Date();
// 현재 년
var year = now.getFullYear();
// 현재 월
var month = now.getMonth() + 1;
// 현재 일
var date = now.getDate();

const datesContainerDiv = document.querySelectorAll(".dates.container")[0];
const setCalendar = (year, month) => {

    const titleMonthDiv = document.getElementsByClassName("month")[0];
    // .innerHTML = `${month}월`;
    titleMonthDiv.innerHTML = `${year}년 ${month}월`;


    //1일이 무슨 요일인지
    var firstDateDay = new Date(year, month - 1, 1).getDay();
    //마지막 날짜?=> 다음달의 1일 전날(0일)
    var lastDate = new Date(year, month - 1 + 1, 0).getDate();

    //원래 있던 달력의 자식들 버리기
    datesContainerDiv.replaceChildren();
    // while (datesContainerDiv.firstChild !== undefined) {
    //     datesContainerDiv.removeChild(datesContainerDiv.firstChild);
    // }
    // datesContainerDiv.innerHTML="";

    //for 1~lastDate
    for (let date = 1; date <= lastDate; date++) {
        //<div class="date item">date</div>
        let dateItemDiv = document.createElement("div");    //<div></div>
        dateItemDiv.classList.add("date");      //<div class="date"></div>
        dateItemDiv.classList.add("item");      //<div class="date item"></div>
        dateItemDiv.innerHTML = date;           //<div class="date item">날짜</div>
        datesContainerDiv.appendChild(dateItemDiv);
    }

    //1일을 firstDateDay로 옮기자   5 -> 6
    //.dates.container의 자식 중 첫째자식(1일) style grid-column-start: day+1
    let firstDateDiv = datesContainerDiv.firstElementChild;
    //CSS { grid-column-start: firstDateDay + 1;}
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

    //토 = 파랑
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${7 - firstDateDay})`);
    for (let dateItem of saturdayDivs) {
        dateItem.style.color = "blue";  //그냥 blue라고 치면 변수라고 생각함
    }
    //일 = 빨강
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${(7 - firstDateDay + 1) % 7})`);
    for (let dateItem of sundayDivs) {
        dateItem.style.color = "red";
    }
}
setCalendar(year, month);

// <: 이전달
//html -> js
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {   //만약 중간에 ()없다면 아무것도 일어나지 않음
    month--;
    if (month == 0) {
        year--;
        month = 12;
    }//방법이 2개 중 위는 하나 밑은 2번
    // let prevMonth = new Date(year, month - 1);
    // year = prevMonth.getFullYear();
    // month = prevMonth.getMonth() + 1;
    setCalendar(year, month);
}
// leftDiv.addEventListener("click", () => console.log(`${month}월`));

const thisMonthDiv = document.getElementsByClassName("month")[0];
thisMonthDiv.onclick = () => {
    now = new Date();
    year = now.getFullYear();
    month = now.getMonth() + 1;

    setCalendar(year, month);
}

// >: 이후달
const rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if (month == 13) {
        year++;
        month = 1;
    }
    setCalendar(year, month);
}
