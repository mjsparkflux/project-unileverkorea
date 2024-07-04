document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('DOMContentLoaded', function () {
        var video = document.querySelector('video')

        video.muted = true
        video.autoplay = true

        var playPromise = video.play()

        if (playPromise !== undefined) {
            playPromise
                .then((_) => {
                    console.log('Autoplay started')
                })
                .catch((error) => {
                    console.log('Autoplay was prevented:', error)
                })
        }
    })

    var swiperEft = new Swiper('.slide-eft .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    })

    var busiswiper = new Swiper('.busiSwiper', {
        effect: 'fade',
        loop: true,
        pagination: {
            el: '.swiper-pagination-busi',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                var realIndex = this.realIndex % 3
                $('.business-list ul li').removeClass('active')
                $('.business-list ul li').eq(realIndex).addClass('active')
            },
        },
    })

    function go01() {
        busiswiper.slideToLoop(0, 1000, false)
    }
    function go02() {
        busiswiper.slideToLoop(1, 1000, false)
    }
    function go03() {
        busiswiper.slideToLoop(2, 1000, false)
    }

    const items = document.querySelectorAll('.business-list ul li')
    items.forEach((item, index) => {
        item.addEventListener('click', function () {
            items.forEach((i) => i.classList.remove('active'))
            item.classList.add('active')
            busiswiper.slideToLoop(index)
        })
    })
})

//Top button scroll
function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
function toggleTopButton() {
    const topButton = document.querySelector('.top')
    if (window.scrollY > 200) {
        topButton.style.display = 'block'
    } else {
        topButton.style.display = 'none'
    }
}
window.addEventListener('scroll', toggleTopButton)
document.querySelector('.btn-top').addEventListener('click', goTop)
