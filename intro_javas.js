const btn = document.querySelector("#button")
btn.addEventListener("click", getText)

function develop(){
    const rdoBtns = document.querySelectorAll("#del") //배열로 들어감
    for(let rdoBtn of rdoBtns){
        if(rdoBtn.checked && rdoBtn.value == "bad") {
            alert("진심이세요?...")
            rdoBtn.checked = false
        }
    }
}

function community(){
    const rdoBtns = document.querySelectorAll("#cmu") //배열로 들어감
    for(let rdoBtn of rdoBtns){
        if(rdoBtn.checked && rdoBtn.value == "bad") {
            alert("진심이세요?...")
            rdoBtn.checked = false
        }
    }
}

function getText(){
    const cin = document.querySelector("#cin")
    const message = document.querySelector("#message")
    message.innerHTML=`저를... "${cin.value}"라고 생각하시는군요`
}