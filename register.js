const agree = document.getElementById("agree");
const registerBtn = document.getElementById("registerBtn");

agree.addEventListener("change", function() {

    if(this.checked){
        registerBtn.disabled = false;
        registerBtn.classList.add("active");
    }else{
        registerBtn.disabled = true;
        registerBtn.classList.remove("active");
    }

});

registerBtn.addEventListener("click", function(){

    if(!agree.checked){
        alert("Silakan setujui syarat dan ketentuan.");
        return;
    }

    alert("Pendaftaran berhasil!");

});
