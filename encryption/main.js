
document.querySelector("#button1").addEventListener("click", ()=>{
    let original = document.querySelector("#original").value;
    document.querySelector("#encrypted").value = btoa(original);
})


document.querySelector("#button2").addEventListener("click", ()=>{
    let message = document.querySelector("#original").value;
    document.querySelector("#encrypted").value = atob(message);
})