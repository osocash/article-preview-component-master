document.querySelector(".share").addEventListener("click",function(){
    this.classList.toggle("active");
    let redes=this.nextElementSibling;
    redes.classList.toggle("show");
});