const popup = document.querySelector("#popup");
const popupCloseBtn = popup.querySelector("button");
const agree = popup.querySelector("#agree");

//쿠키 생성 함수
function createCookie(name, value, expire) {
    let today = new Date();
    today.setDate(today.getDate() + expire);
    document.cookie = `${name}=${value}; Expires=${today.toString()}`;
}

popup.style.display = document.cookie.includes("popup=notToday")? "none" : "block";

popupCloseBtn.addEventListener("click", () =>{
    popup.style.display = "none";
})

popupCloseBtn.addEventListener("click", () => {
    popup.style.display = "none";
    if (agree.checked) {
    //체크 여부 확인
        createCookie("popup", "notToday", 1);
    } else {
        createCookie("popup", "notToday", -1);
    }
});
