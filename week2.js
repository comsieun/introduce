//버튼 연결
const btn = document.querySelector("#button")
let count = 0

btn.addEventListener("click", getRadio) //행위, 함수이름

function resText(){
    const message = document.querySelector("#message")
    message.innerHTML = "화내기!!!!!!!!"
    message.style.color = "red"
    message.style.fontSize = "20px"

    setTimeout(rest,3000)
}

function rest(){
    const message = document.querySelector("#message")
    message.innerHTML = "진정하기"
    message.style.color = "black"
    message.style.fontSize = "5px"
}

function counter(){
    const message = document.querySelector("#message")
    message.innerHTML = `현재 카운트 수는 ${count++}입니다.`
    if(count>5){
        message.style.color = "red"
    }
}

function getText(){
    const cin = document.querySelector("#cin")
    const message = document.querySelector("#message")
    message.innerHTML=`당신이 입력한 건 ${cin.value}이군요!`
}

function getRadio(){
    // const rdo= document.querySelector("#rdo")
    // if(rdo.checked){ 
    //     alert("체크하면 안 돼요!")
    //     rdo.checked = false
    // }

    const rdoBtns = document.querySelectorAll("#rdo") //배열로 들어감
    for(let rdoBtn of rdoBtns){
        if(rdoBtn.checked && rdoBtn.value == "bad") {
            alert("나빠요!")
            rdoBtn.checked = false
    }
}
    
}