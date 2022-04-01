const ulEl = document.querySelector(".menu-section");
const openEl = document.querySelector(".btn-open");
const closeEl = document.querySelector(".btn-close");
// =================that is for menu toggles=================
openEl.addEventListener("click", function(){
    ulEl.style.display = "block"
    openEl.style.display = "none"
    closeEl.style.display = "inline-block"
})
closeEl.addEventListener("click", function(){
    ulEl.style.display = "none"
   
    closeEl.style.display = "none"
    openEl.style.display = "inline-block"
})

// ================== this is for phase 5 of the site, setting, personal date and password===============

const psBtn = document.querySelector(".ps-btn");
const stBtn = document.querySelector(".st-btn");
const paBtn = document.querySelector(".pa-btn");

const profileEl = document.querySelector(".profiles");
const settingsEl = document.querySelector(".settings");
const passwordsEl = document.querySelector(".passwords")

psBtn.addEventListener("click", function(){
    psBtn.classList.add("active")
    paBtn.classList.remove("active")
    stBtn.classList.remove("active")

    profileEl.style.display = "grid"
    settingsEl.style.display = "none"
    passwordsEl.style.display = "none"

})

paBtn.addEventListener("click", function(){
    psBtn.classList.remove("active")
    paBtn.classList.add("active")
    stBtn.classList.remove("active")

    profileEl.style.display = "none"
    settingsEl.style.display = "none"
    passwordsEl.style.display = "block"

})

stBtn.addEventListener("click", function(){
    stBtn.classList.add("active")
    paBtn.classList.remove("active")
    psBtn.classList.remove("active")

    profileEl.style.display = "none"
    settingsEl.style.display = "flex"
    passwordsEl.style.display = "none"

})