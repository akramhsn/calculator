function calculator(ele) {

    document.getElementById("display").value += ele;
}
function ans() {
    let c = document.getElementById("display").value;
    let b = eval(c);
    document.getElementById("display").value=b;
} 
function del(){
    document.getElementById("display").value ="";
}