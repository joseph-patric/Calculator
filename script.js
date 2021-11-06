// 

function displayValue(num){
    // document.querySelector("#inpt").value+=num; 
    // since id is unique we can skip adding getElementById() and querySelector()
    inpt.value+=num
}

function clearBox(){
    inpt.value="";
}

function evaluateExpression(){
    let result=eval(inpt.value)
    inpt.value=result
}

function removeElement(){
    let data = inpt.value.slice(0,-1)
    inpt.value=data
}