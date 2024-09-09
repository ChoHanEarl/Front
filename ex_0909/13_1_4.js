//button을 눌렀을 때 고양이 이미지를 바꿔주기
//profile.jpg -> Cat1.jpg -> Cat2.jpg
//이미지가 나오는 원리 : <img src="이미지경로">
//버튼을 눌렀을 때 img태그의 src값을 변경
//버튼을 눌렀을 떄("click")
//img태그의 정보를 변수에 저장한다.
//변수에서 src의 값을 setAttribute()를 통해서 변경한다.
document.addEventListener("DOMContentLoaded",function(e){
    let button = document.querySelector("input")
    let image = document.querySelector("img")
    let img1 = "img/profile.jpg"
    let img2 = "img/Cat1.jpg"
    let img3 = "img/Cat2.jpg"
    button.addEventListener("click",function(e){
        //img태그의 src를 수정해야 함
        let src = image.getAttribute("src") //img태그의 src속성의 값을 변수에 저장
        if(src === img1){
            image.setAttribute("src", img2)
        } else if(src === img2){
            image.setAttribute("src", img3)
        } else{
            image.setAttribute("src", img1)
        }
        
    })
})