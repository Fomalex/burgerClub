$(document).ready(() => {

    $('.category').click((event) => {
        let currentElement = $(event.target);
        $('.products-container').hide();
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElement.addClass('active');

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    });

    //slick для бургеров
    $('#burgers-container .products').slick({
        slidesToShow: 1, //показать слайдов
        slidesToScroll: 1, // прокручивать по одному
        arrows: true, // стрелки нужны - true
        fade: true, // плавная анимация переключения слайдов
        asNavFor: '#burgers-container .products-nav' // навигационное меню
    });
    $('#burgers-container .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers-container .products', // связываем с первым слайдером
        dots: false, //точки
        centerMode: false, //чтобы эл-ты не центрировались
        focusOnSelect: true,
        infinite: false // убрать бесконечное перелистывание
    });

    //slick для картошки фри
    $('#fries-container .products').slick({
        slidesToShow: 1, //показать слайдов
        slidesToScroll: 1, // прокручивать по одному
        arrows: true, // стрелки нужны - true
        fade: true, // плавная анимация переключения слайдов
        asNavFor: '#fries-container .products-nav' // навигационное меню
    });
    $('#fries-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries-container .products', // связываем с первым слайдером
        dots: false, //точки
        centerMode: false, //чтобы эл-ты не центрировались
        focusOnSelect: true,
        infinite: false // убрать бесконечное перелистывание
    });

    //slick для соусов
    $('#sauces-container .products').slick({
        slidesToShow: 1, //показать слайдов
        slidesToScroll: 1, // прокручивать по одному
        arrows: true, // стрелки нужны - true
        fade: true, // плавная анимация переключения слайдов
        asNavFor: '#sauces-container .products-nav' // навигационное меню
    });
    $('#sauces-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#sauces-container .products', // связываем с первым слайдером
        dots: false, //точки
        centerMode: false, //чтобы эл-ты не центрировались
        focusOnSelect: true,
        infinite: false // убрать бесконечное перелистывание
    });

    //slick для напитков
    $('#drinks-container .products').slick({
        slidesToShow: 1, //показать слайдов
        slidesToScroll: 1, // прокручивать по одному
        arrows: true, // стрелки нужны - true
        fade: true, // плавная анимация переключения слайдов
        asNavFor: '#drinks-container .products-nav' // навигационное меню
    });
    $('#drinks-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#drinks-container .products', // связываем с первым слайдером
        dots: false, //точки
        centerMode: false, //чтобы эл-ты не центрировались
        focusOnSelect: true,
        infinite: false // убрать бесконечное перелистывание
    });

    $('#reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });

    // обработчик события - открытие модального окна по клику на кнопку "Забронировать столик"
    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex');
        $('#reserve-error').hide();
    });

    // обработчик события - скртыие модального окна при нажатии на свободную область или крестик
    $('#reservation-cancel-close, #reservation-container').click((event) => {
        if (event.target.id === 'reservation-container' || event.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });

    // Валидация формы:
    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let count = $('#count');
        let phone = $('#phone');
        let time = $('#time');

        if (name.val() && count.val() && phone.val() && time.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-send').show();
                    $('#reservation-content').hide();
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            $('#reserve-error').show();
        }
    })

    // Обработчик события - клик по пункту меню:
    $('#menu a').click((e) => {
        $('#menu li').removeClass('active');
        $(e.target).parent().addClass('active');
        $('#header').removeClass('menu-open');
    });

    // Обработчик события по клику на бургер-меню:
    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    })
});
