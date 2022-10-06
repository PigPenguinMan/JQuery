/*


*/
window.addEventListener("DOMContentLoaded",() => {
    window.addEventListener("scroll",function(){
        //// 프로그래스 바가 있다면 실행할 수 있도록 
        if (document.querySelector(".progressbar") != null){
            // 프로그래스바 세팅함수 실행 
            setProgress();
        }

    })
})
/// progress 의 width를 스크롤 길이에 따라 수정
function setProgress(){
    // 스크롤한 높이 
    let currentY = document.documentElement.scrollTop;
    // console.log(currentY);
    // 전체 높이 
    let totalY =document.documentElement.scrollHeight-document.documentElement.clientHeight;
    console.log(totalY);

    // 퍼센트로 바꿔서 progress css에 width값에 넣어주기 
    let per = (currentY/totalY)*100;
    document.querySelector(".progress").style.width = per+"%" ;
}