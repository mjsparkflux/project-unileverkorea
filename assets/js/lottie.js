var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation'), // 애니메이션을 표시할 요소
    renderer: 'svg', // 렌더링 방식: 'svg', 'canvas', 'html'
    loop: true, // 반복 재생 여부
    autoplay: true, // 자동 재생 여부
    path: '/assets/animations/logo_animation.json', // JSON 파일 경로
})
