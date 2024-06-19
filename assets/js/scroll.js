$(function () {
    gsap.registerPlugin(ScrollTrigger)
    //logo scrollTrigger
    const box1 = document.querySelector('#logos')
    gsap.timeline({
        scrollTrigger: {
            trigger: box1,
            start: 'top top',
            end: '+=2800 bottom',
            pin: true,
            //anticipatePin: 1,
            scrub: 3,
            onEnter() {
                $('#header').addClass('scroll').addClass('blur')
            },
            onLeave() {
                $('#header').removeClass('blur')
            },
            onEnterBack() {
                $('#header').addClass('blur')
            },
            onLeaveBack() {
                $('#header').removeClass('scroll').removeClass('blur')
            },
        },
        ease: Power0.easeNone,
        delay: 1,
    })
        .from('#logos .text2', {
            opacity: 0,
        })
        .to(
            '#logo .text1',
            {
                duration: 4,
                opacity: 0,
                transform: 'translateY(-150%)',
            },
            '0',
        )
        .to(
            '#logos .text2',
            {
                duration: 4,
                opacity: 1,
                transform: 'translateY(-50%)',
            },
            '0',
        )
        .to(
            '#logos .cover',
            {
                'clip-path': 'circle(200% at 50% 50%)',
                ease: Power0.easeNone,
                duration: 20,
            },
            '+=2',
        )
        .to(
            '#logos .text2',
            {
                duration: 4,
                transform: 'translateY(150%)',
                opacity: 0,
            },
            '-1',
        )
        .to(
            '#logos .text1',
            {
                duration: 4,
                transform: 'translateY(-50%)',
                opacity: 1,
            },
            '-1',
        )
})
