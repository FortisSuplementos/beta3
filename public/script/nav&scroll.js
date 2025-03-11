document.addEventListener('DOMContentLoaded', function() {
    const buttons = { 
        homebtn: { url: 'index.html', section: 'home'},
        buybtn: { url: 'store.html', section: 'home'},
        nav_homebtn: { url: 'index.html', section: 'home'},
        nav_buybtn: { url: 'store.html', section: 'home'},
    };
    Object.keys(buttons).forEach(btnId => {
        const btn = document.getElementById(btnId);
        const {url, section } = buttons[btnId];

        btn.addEventListener('click', function() {
            const currentUrl = window.location.pathname;
            if (currentUrl.endsWith(url)) {
                document.getElementById(section).scrollIntoView({behavior: 'smooth'});
            } else {
                window.location.href = `${url}#${section}`;
            }
        });
    });
});


window.addEventListener('scroll', function() {
    const navbarbox = document.getElementById('navbarbox');
    if (window.scrollY > navbarbox.offsetTop) {
        navbarbox.classList.add('scroll');
    } else {
        navbarbox.classList.remove('scroll')
    }
})




let currentIndex = 0;
const items = document.querySelectorAll('.news_item');
let autoSlideInterval;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });

    const news = document.querySelector('.news');
    news.style.transform = `translateX(-${index * 100}%)`;
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 10000);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
    resetAutoSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 +  items.length) % items.length;
    showSlide(currentIndex);
    resetAutoSlide();
}



document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    autoSlideInterval = setInterval(nextSlide, 10000);
});