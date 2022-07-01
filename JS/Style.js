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
    if(window.scrollY > 300) {
        nav3.classList.add('vipframe');
        nav3.classList.remove('vipframe2');
    } else {
        nav3.classList.add('vipframe2');
        nav3.classList.remove('vipframe');
    }
});