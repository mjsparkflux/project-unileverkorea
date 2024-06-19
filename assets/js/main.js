document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.slide-intro', {
        // spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 80000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var isPaused = false
    var pauseButton = document.createElement('button')
    pauseButton.className = 'swiper-button-pause'
    pauseButton.textContent = 'Pause'
    document.querySelector('.slide-intro').appendChild(pauseButton)

    pauseButton.addEventListener('click', function () {
        if (isPaused) {
            swiper.autoplay.start()
            pauseButton.textContent = 'Pause'
        } else {
            swiper.autoplay.stop()
            pauseButton.textContent = 'Play'
        }
        isPaused = !isPaused
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
            768: {
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
        effect: 'fade', // 페이드 효과 사용
        loop: true,
        pagination: {
            el: '.swiper-pagination-busi',
            clickable: true,
        },
        autoplay: {
            //자동슬라이드 (false-비활성화)
            delay: 5000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
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
        busiswiper.slideToLoop(0, 1000, false) // 루프 사용 시 slideToLoop 사용
    }
    function go02() {
        busiswiper.slideToLoop(1, 1000, false) // 루프 사용 시 slideToLoop 사용
    }
    function go03() {
        busiswiper.slideToLoop(2, 1000, false) // 루프 사용 시 slideToLoop 사용
    }

    // Add click event listeners to the list items
    const items = document.querySelectorAll('.business-list ul li')
    items.forEach((item, index) => {
        item.addEventListener('click', function () {
            items.forEach((i) => i.classList.remove('active')) // Remove 'active' class from all items
            item.classList.add('active') // Add 'active' class to the clicked item
            busiswiper.slideToLoop(index) // Slide to the clicked item
        })
    })
})
