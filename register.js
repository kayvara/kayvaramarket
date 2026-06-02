const agree =
document.getElementById("agree");

const btn =
document.getElementById("registerBtn");

agree.addEventListener("change",()=>{

btn.disabled=!agree.checked;

});
