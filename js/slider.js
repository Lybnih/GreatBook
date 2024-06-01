var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1500, // Intervalo de 3 segundos entre cada transição
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});