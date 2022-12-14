$(() => {
    let navLink = $('.nav-link')
    let afterLink = $('.after__link')
    let loadingContainer = $('.loading__container')
    let adaptiveAbout = $('.adaptiveAbout__row')
    let aboutMyFoto = $('.about__my__foto')
    let main = $('main')
    let parallax = $('.parallax')
    let loading = $('#loading')
    let navbar = $('.navbar')
    let textAboutTitle = $('#text__about_title')
    let contentHtml = $(".content__html")
    
    let arrayLinks = [
        {
            img: './img/portfolio__img__11.png',
            href: "./myJobs/practicsSCSS/index.html",
            cssHref: './myJobs/practicsSCSS/css/style.css',
            SrcJs: "./myJobs/practicsSCSS/js/script.js",
            filter: 'APPS'
        },
        {
            img: './img/portfolio__img__1.png',
            href: "./myJobs/jQuery3/index.html",
            cssHref: './css/movie.css',
            SrcJs: "./jsLinks/movie.js",
            filter: 'APPS'
        },
        {
            img: './img/portfolio__img__2.png',
            href: "./myJobs/CssGenerator/index.html",
            cssHref: './css/CssGenerator.css',
            SrcJs: "./jsLinks/cssGenerator.js",
            filter: 'APPS'
        },
        {
            img: './img/portfolio__img__3.png',
            href: "./myJobs/lendingSite1/index.html",
            cssHref: './css/lending1.css',
            SrcJs: '',
            filter: 'WEBSITE'
        },
        {
            img: './img/portfolio__img__4.png',
            href: "./myJobs/paint/index.html",
            cssHref: './css/paint.css',
            SrcJs: "./jsLinks/paint.js",
            filter: 'APPS'
        },
        {
            img: './img/portfolio__img__5.png',
            href: "./myJobs/lendingSite2/index.html",
            cssHref: './css/lending2.css',
            SrcJs: "./jsLinks/lending2.js",
            filter: 'WEBSITE'
        },
        {
            img: './img/portfolio__img__6.png',
            href: "./myJobs/CurrencyConvertor/index.html",
            cssHref: "css/convector.css",
            SrcJs: "./jsLinks/convector.js",
            filter: 'APPS'
        },
        {
            img: './img/portfolio__img__7.png',
            href: "./myJobs/lendingSite3/index.html",
            cssHref: './css/lending3.css',
            SrcJs: "./jsLinks/lending3.js",
            filter: 'WEBSITE'
        },
        {
            img: './img/portfolio__img__10.png',
            href: "./myJobs/lendingSite5/index.html",
            cssHref: './css/lending5.css',
            SrcJs: "./jsLinks/lending5.js",
            filter: 'WEBSITE'
        },
        {
            img: './img/portfolio__img__audio_slider.png',
            href: "./myJobs/audio/index.html",
            cssHref: "./css/audioCss.css",
            SrcJs: "./jsLinks/audio.js",
            filter: 'APPS'
        }
    ]

    let counter = 0
    for (const item of arrayLinks) {
        let tmp
        let tmpSize
        counter++
        if (counter % 3 == 0) {
            tmpSize = 'grid-item--height3'
            counter++
        } else if (counter % 2 == 0) {
            tmpSize = 'grid-item--height2'
        }

        if (item.filter == 'WEBSITE') {
            tmp = 'WEBSITE'
        } else {
            tmp = 'APPS'
        }
        $('.grid').append(`
<div class="grid-item parrent element__img__1 ${tmpSize} element-item  ${tmp} "
data-category="${tmp}" data-href="${item.href}" data-cssHref="${item.cssHref}" data-src="${item.SrcJs}"
data-filter = "">
<button type="button" class="btn btn-outline-light btn-outline-light-animate">Review
</button>  
<img class="WEBSITE" src="${item.img}" alt="">
</div>
`)

        // slider

        $('.slider__portfolio').append(`
<div class = "slider__block parrent"data-category="${tmp}" data-href="${item.href}" data-cssHref="${item.cssHref}" data-src="${item.SrcJs}">
<button type="button" class="btn btn-outline-light btn__slider btn-outline-light-animate">Review
</button>  
<img class="WEBSITE" src="${item.img}" alt="">
</div>
`)
    }

    $('.btn-outline-light-animate').on('click', function () {
        let parent = '.parrent'
        let tmpCss = $(this).parents(parent).attr('data-cssHref')
        let srcJsLink = $(this).parents(parent).attr('data-src')
        let oldLinkCss = $('#oldLinkCss')
        let linkCss = $('#linkCss')
        let modalWindowBlock = $(".modal__window__block")
        let href = 'href'
        //
        contentHtml.load(`${$(this).parents(parent).attr('data-href')} .wrapper__link`,
            function (response, status, xhr) {
                if (xhr.status == 200) {
                    let script = document.createElement('script')
                    script.src = srcJsLink
                    document.head.append(script)
                    navbar.hide()
                    loadingContainer.fadeIn(0, function () {
                        document.body.style.overflow = 'hidden'
                        oldLinkCss.attr(href, '')
                        linkCss.attr(href, tmpCss)
                        modalWindowBlock.fadeIn(500)
                    })
                    $('.wrapper__link').css('margin-top', '55px')

                    

                    // close

                    $('.close__window').on('click', function () {
                        script.remove()
                        oldLinkCss.attr(href, './css/portfolio.css')
                        linkCss.attr(href, '')
                        $('#myScript').attr('src', '')
                        document.body.style.overflow = 'auto';
                        setTimeout(() => {
                            navbar.slideDown(300)
                        }, 500);
                        modalWindowBlock.fadeOut(500)
                        loadingContainer.fadeOut(500, function () {
                        })
                        contentHtml.children().remove()
                    })
                }
            })
    })

    // link function

    function inNewWindow(block) {
        block.on('click', function (evt) {
            evt.preventDefault();
            console.log(evt.target.href);
            window.open(evt.target.href, '_blank');
        })
    }

    // link 
    inNewWindow($('.facebook__link'))
    inNewWindow($('.instagram__link'))
    inNewWindow($('.youtube__link'))
    inNewWindow($('.telegram__link'))
    inNewWindow($('.linkGit'))

    // init Isotope
    let $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.WEBSITE',
            symbol: '.APPS',
            category: '[data-category]',
            weight: function (itemElem) {
                let weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });

    $grid.on('arrangeComplete', function (event, filteredItems) { });

    // bind filter button click
    $('.filter-button-group').on('click', 'button', function () {
        let filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        let $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 60,
        gutter: 10
    });

    // slider portfolio
    $('.slider__portfolio').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // slider TESTIMONIALS

    $('.TESTIMONIALS').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    })

    // 

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;
            } else {
                con.className = 'console-underscore'
                visible = true;
            }
        }, 400)
    }

    // ScrollReveal
    let homeBlockTitle = '.home__block__title'
    let animateRigth = 'animate__animated animate__backInRight'
    let animateLeft = 'animate__animated animate__backInLeft'
    let aboutBtn = $('.about__btn')
    ScrollReveal().reveal(homeBlockTitle, {
        beforeReveal: function () {
            $(homeBlockTitle).hide().show(500)
        }
    })
    ScrollReveal().reveal('.block__hr', {
        interval: 200
    })

    ScrollReveal().reveal('.parallax')
    ScrollReveal().reveal('.about__my__foto')
    ScrollReveal().reveal('.hide__show', { interval: 150 })
    ScrollReveal().reveal('.parentBi__about', { interval: 200 })
    ScrollReveal().reveal('.row__about__me__title', {
        beforeReveal: function () {
            $('.row__about__me__title').attr('class', animateLeft)
            $('.SkillsTitle').attr('class', animateRigth)
        }
    })

    ScrollReveal().reveal('.progress__block', { interval: 200 });

    ScrollReveal().reveal('.about__info__text', {
        delay: 400,
        beforeReveal: function () {
            aboutBtn.addClass(animateRigth)
            let count = 0
            let interval = setInterval(() => {
                if (count <= 3) {
                    $('.progressnodeJs').css('width', `${count}%`)
                    $('.loadingCounter:eq(7)').text(count + '%')
                }
                if (count <= 5) {
                    $('.progressangular').css('width', `${count}%`)
                    $('.loadingCounter:eq(6)').text(count + '%')
                }
                if (count <= 9) {
                    $('.progressSCSS').css('width', `${count}%`)
                    $('.loadingCounter:eq(2)').text(count + '%')
                    $('.loadingCounter:eq(8)').text(count + '%')
                }
                if (count <= 65) {
                    $('.progressjQuery').css('width', `${count}%`)
                    $('.loadingCounter:eq(5)').text(count + '%')
                }
                if (count <= 75) {
                    $('.progressJS').css('width', `${count}%`)
                    $('.loadingCounter:eq(3)').text(count + '%')
                }
                if (count <= 80) {
                    $('.progressCss').css('width', `${count}%`)
                    $('.loadingCounter:eq(1)').text(count + '%')
                }
                if (count <= 82) {
                    $('.progressGit').css('width', `${count}%`)
                    $('.loadingCounter:eq(4)').text(count + '%')
                }
                if (count <= 85) {
                    $('.progressHtml').css('width', `${count}%`)
                    $('.loadingCounter:eq(0)').text(count + '%')
                } else {
                    clearInterval(interval)
                }
                ++count
            }, 50);
        }
    })

    ScrollReveal().reveal('.about__cards', { interval: 300 })
    ScrollReveal().reveal('.button', {
        interval: 300,
        beforeReveal: function () {
            $('.button:eq(0)').addClass('animate__animated animate__backInLeft')
            $('.button:eq(1)').addClass('animate__animated animate__backInDown')
            $('.button:eq(2)').addClass('animate__animated animate__backInRight')
        }
    })

    ScrollReveal().reveal('.grid-item', { interval: 180 })
    ScrollReveal().reveal('#about__btn', {
        beforeReveal: function () {
            $('.about__btn:eq(1)').hide().show(500)
        }
    })

    ScrollReveal().reveal('.slider__portfolio', {})
    ScrollReveal().reveal('.TESTIMONIALS__revel', { delay: 200 })///
    ScrollReveal().reveal('.contact__info', { delay: 300 });
    ScrollReveal().reveal('.contact__input', { delay: 300 })
    ScrollReveal().reveal('footer');
    ScrollReveal().reveal('.footer__img', { interval: 200 });

    // hover cards

    let animateCards = 'animate__animated animate__jello'
    $('.about__cards').hover(
        function () {
            $(this).addClass(animateCards)
        },
        function () {
            setTimeout(() => {
                $(this).removeClass(animateCards)
            }, 1500);
        }
    )

    // navigation

    $(`.active-navBar`).children().hide().show(500)

    navLink.hover(function () {
        if (!$(this).hasClass('active-navBar')) {
            $(this).children().show(200)
        }
    },
        function () {
            if (!$(this).hasClass('active-navBar')) {
                $(this).children().hide(1)
            }
        })

    navbar.hide().slideDown(500)

    // scroll event

    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            if ($(`.active-navBar`).attr('data-id') == 'AboutMe') {
                navLink.css('color', '#fff')
                afterLink.css('background-color', '#fff')
            }
            navbar.css('background-color', '#000')
        } else {
            if ($(`.active-navBar`).attr('data-id') == 'AboutMe') {
                navLink.css('color', '#000')
                afterLink.css('background-color', '#000')
            }
            navbar.css('background-color', 'transparent')
            navbar.hide().slideDown(500)
        }
    })

    // hide section nav

    $('section :first-child nav').hide()
    parallax.css('min-height', '50vh')
    //

    let intervalMenu

    window.onresize = function () {
        let home = 'home'
        if (window.innerWidth <= 768 && $(`.active-navBar`).attr('data-id') != home) {
            parallax.css({
                minHeight: '50vh'
            })
        } else if (window.innerWidth >= 768 && $(`.active-navBar`).attr('data-id') != home) {
            parallax.css({
                minHeight: '100vh'
            })
        } else if (window.innerWidth <= 768 && $(`.active-navBar`).attr('data-id') == home) {
            parallax.css({
                minHeight: '25vh'
            })
        } else if (window.innerWidth >= 768 && $(`.active-navBar`).attr('data-id') == home) {
            parallax.css({
                minHeight: '50vh'
            })
        }
    }

    // loading

    loadingContainer.show()
    loading.show()

    intervalMenu = setTimeout(() => {
        loadingContainer.hide()
        loading.hide()
        navbar.hide().slideDown(500)
        consoleText(['Hello, this is my site. My name is Roman, browse and see my portfolio!'], 'text', ['#fff']);
    }, 500);
    //
    navLink.on('click', function (event) {
        let dataId = $(`.nav-link[data-id=${$(this).attr('data-id')}]`)
        //
        event.preventDefault()
        //
        $('#navbarSupportedContent').removeClass('show')
        $('.navbar-toggler').removeAttr('aria-expanded')
        //
        if ($(this).attr('data-id') == 'AboutMe') {
            navLink.css('color', '#000')
            afterLink.css('background-color', '#000')
        } else {
            navLink.css('color', '#fff')
            afterLink.css('background-color', '#fff')
        }
        //
        ScrollReveal().reveal('.hhiden', {
            reset: false
        });
        $(document).scrollTop(0)

        clearInterval(intervalMenu)
        //
        loadingContainer.show()
        loading.show()
        //
        navLink.removeClass('active-navBar').children().hide()
        dataId.addClass('active-navBar')
        dataId.children().hide().show(500)
        //
        intervalMenu = setTimeout(() => {
            loadingContainer.hide()
            loading.hide()
            navbar.hide().slideDown(500)
        }, 500);
        //
        if ($(this).attr('data-id') === 'home') {
            adaptiveAbout.removeClass('col-xl-6 col-xl-12').addClass('col-xl-12')
            $('.adaptiveAbout__row:eq(1)').removeClass('col-xl-12').addClass('col-xl-6 offset-xl-3 ')
            aboutMyFoto.css('width', '20%')
            main.children().show()
            $('section :first-child nav').hide()
            parallax.css('min-height', '50vh')
            textAboutTitle.css('color', 'white')
        } else if ($(this).attr('data-id') === 'AboutMe') {
            adaptiveAbout.removeClass('col-xl-12 offset-xl-3').addClass('col-xl-6')
            aboutMyFoto.css('width', '50%')
            ///
            main.children().hide()
            main.children('#aboutMe').show()
            ///
            textAboutTitle.css('color', 'black')
            $('section :first-child nav').show()
            parallax.css('min-height', '100vh')
        } else if ($(this).attr('data-id') === 'myWorks') {
            main.children().hide()
            main.children('#myWorks').show()
            $('section :first-child nav').show()
            parallax.css('min-height', '100vh')
        } else if ($(this).attr('data-id') === 'contact') {
            main.children().hide()
            main.children('#contacts').show()
            $('section :first-child nav').show()
            parallax.css('min-height', '100vh')
        }
        aboutBtn.hide().show(200)

        if (window.innerWidth <= 768 && $(`.active-navBar`).attr('data-id') != 'home') {
            parallax.css({
                minHeight: '50vh'
            })
        }

        if (window.innerWidth >= 768 && $(`.active-navBar`).attr('data-id') != 'home') {
            parallax.css({
                minHeight: '100vh'
            })
        }
    })

    // validation contacts 

    function valid(value, error, pattern) {
        let valid = pattern.test(value)
        if (valid) {
            error.css({
                boxShadow: '0 0 8px 4px green'
            })
            error.slideUp(500)
            return true
        } else {
            error.css({
                boxShadow: '0 0 8px 4px red'
            })
            error.slideDown(500)
            return false
        }
    }

    //

    let input1 = $('#exampleFormControlInput1')
    let input2 = $('#exampleFormControlInput2')
    let input3 = $('#exampleFormControlInput3')
    //
    let patternName = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
    let patternEmail = /^[a-zA-Z][a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    let patternSub = /^[A-Za-z][A-Za-z0-9_]{3,29}$/
    //
    inputBlur(input1, patternName)
    inputBlur(input2, patternEmail)
    inputBlur(input3, patternSub)
    //
    function inputBlur(input, pattern) {
        input.on('blur', function () {
            valid($(this).val(), $(this).next(), pattern)
        })
    }
    //
    $('#btnSubmit').on('click', function () {
        let validationName = valid(input1.val(), input1.next(), patternName)
        let validationEmail = valid(input2.val(), input2.next(), patternEmail)
        let validationSubject = valid(input3.val(), input3.next(), patternSub)
        if (validationName && validationEmail && validationSubject) {
            loadingContainer.show()
            loading.show()
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify('Send your message!', 'custom', 2,);
            setTimeout(() => {
                loadingContainer.hide()
                loading.hide()
                navbar.hide().slideDown(500)
            }, 200);
            input3.val('')
            input2.val('')
            input1.val('')
            $('#floatingTextarea2').val('')
        }
        if (!validationName) {
            input1.val('')
        }
        if (!validationEmail) {
            input2.val('')
        }
        if (!validationSubject) {
            input3.val('')
        }
    })

    // map

    let coords = { lat: 49.8368512, lng: 24.018944 }
    map = new google.maps.Map(document.getElementById("map"), {
        center: coords,
        zoom: 16,
    });

})