
// todo tabs
const tabContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')

const hideTabContent = ()=>{
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item =>{
        item.classList.remove('tabheader__item_active')
    })
}
hideTabContent()
const showTabContent = (i=0) => {
        tabContent[i].style.display = 'block'
        tabs[i].classList.add('tabheader__item_active')
    }
    showTabContent()

tabsParent.onclick = (e)=>{
    if(e.target.classList.contains('tabheader__item')){
        tabs.forEach((item,index)=>{
            if(e.target === item){
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}


// todo HW 1) сделать слайдер автоматическим, чтобы срабатывала каждые 3 секунды

let counter = 0
function launchSlider(){
    hideTabContent()
    showTabContent(counter)
        counter++
    if(counter >= tabs.length){
        counter = 0
    }
}
setInterval(launchSlider,3000)


// todo modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const modalCloseBtn = document.querySelector('.modal__close')

const openModal = () => {
        modal.classList.add('show')
        document.body.style.overflow = 'hidden'
}

modalTrigger.onclick = ()=> openModal()
const closeModal = () =>{
    modal.classList.remove('show')
    document.body.style.overflow = ''
}
modalCloseBtn.onclick = () => closeModal()
modal.onclick = (e) => e.target === modal && closeModal()

//  todo 2) вызывать модальное окно по скролу до конца страницы
// todo 3) вызывать модальное окно через 10 секунд после открытия сайта


window.addEventListener('scroll',()=>{
    let presentScroll = window.scrollY + window.innerHeight
    let heightPage = document.body.scrollHeight
    if (presentScroll >= heightPage) {
        openModal()
    }
})

window.addEventListener('load',()=>{
    setTimeout(openModal,10000)
})
