document.addEventListener("DOMContentLoaded",function(e){
    let input = document.querySelector("#input")
    input.addEventListener("click",function(e){
        // 속성을 조회
        // console.log(e.target.getAttribute("type"))

        // 속성을 변경
        // e.target.setAttribute("type","text")

        // 속성값 토글
        if(e.target.getAttribute("type") === "button"){
            e.target.setAttribute("type","text")
        }
    })

    //keydown은 포커스가 사라지지 않아서 바뀌지 않는다.
    //포커스가 입력창 내부에 있기 때문에 텍스트의 입력이 덜 끝났다고 생각하여
    //작업을 수행하지 않는다.
    //따라서 이 상황에서는 change를 주는 것이 좋다.
    input.addEventListener("change",function(e){
            e.target.setAttribute("type","button");
    })

})

