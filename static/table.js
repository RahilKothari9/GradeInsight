const sendMails = document.querySelector('.mail')
const showBox = document.querySelector(".sendmail_wrapper")
let confirm = document.querySelectorAll('.click')


sendMails.addEventListener("click",()=>{
    showBox.classList.add("showConfirm")
    showBox.classList.remove("hidden")
})


confirm.forEach(function(ele) {
    ele.addEventListener("click", ()=>{
        showBox.classList.remove("showConfirm")
        showBox.classList.add("hidden")
});
})

