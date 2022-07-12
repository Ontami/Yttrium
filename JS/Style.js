const nav = document.querySelector('.nav2')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 220) {
        nav.classList.add('nav');
        nav.classList.remove('nav2');
    } else {
        nav.classList.add('nav2');
        nav.classList.remove('nav');
    }
});
const nav2 = document.querySelector('.opacity')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 649) {
        nav2.classList.add('opacity');
        nav2.classList.remove('opacity0');
    } else {
        nav2.classList.add('opacity0');
        nav2.classList.remove('opacity');
    }
});
const nav3 = document.querySelector('.vipframe2')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 200) {
        nav3.classList.add('vipframe');
        nav3.classList.remove('vipframe2');
    } else {
        nav3.classList.add('vipframe2');
        nav3.classList.remove('vipframe');
    }
});


const nav4 = document.querySelector('.load')
window.addEventListener('scroll' , () => {
    if(window.scrollY > 649) {
        nav4.classList.add('load');
        nav4.classList.remove('load2');
    } else {
        nav4.classList.add('load2');
        nav4.classList.remove('load');
    }})
    const nav5 = document.querySelector('.loadbar')
    window.addEventListener('scroll' , () => {
        if(window.scrollY > 649) {
            nav5.classList.add('loadbar');
            nav5.classList.remove('loadbar2');
        } else {
            nav5.classList.add('loadbar2');
            nav5.classList.remove('loadbar');
        }})
    