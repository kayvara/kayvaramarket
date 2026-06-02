const agree = document.getElementById("agree");
const registerBtn = document.getElementById("registerBtn");

agree.addEventListener("change", () => {
    registerBtn.disabled = !agree.checked;
});
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
