$(() => {
    // let isTrue = false
    // $('button').on('click', function () {
    //     if (isTrue == false) {
    //         $('button').text('Slide Down')
    //     } else {
    //         $('button').text('Slide Up')
    //     }
    //     $('.block').slideToggle("slow")
    //     isTrue = !isTrue
    // })


    // $('#btnModalOpen').on('click', function () {
    //     $('.container__modal').fadeIn("slow")
    //     $('.opasity').show()
    // })
    // $('#btnModelClose').on('click', function () {
    //     $('.container__modal').fadeOut("slow")
    //     $('.opasity').hide()
    // })

    function sort(symbol) {
        let element = document.querySelector('.film__list')
        if (symbol == '>') {
            for (let i = 0; i < element.children.length; i++) {
                for (let j = i; j < element.children.length; j++) {
                    if (+element.children[i].getAttribute('data-year') >
                        +element.children[j].getAttribute('data-year')) {
                        replacedNode = element.replaceChild(element.children[j], element.children[i]);
                        insertAfter(replacedNode, element.children[i])
                    }
                }
            }
        } else {
            for (let i = 0; i < element.children.length; i++) {
                for (let j = i; j < element.children.length; j++) {
                    if (+element.children[i].getAttribute('data-year') <
                        +element.children[j].getAttribute('data-year')) {
                        replacedNode = element.replaceChild(element.children[j], element.children[i]);
                        insertAfter(replacedNode, element.children[i])
                    }
                }
            }
        }


    }

  


    function ratingStars(rating) {
        console.log(rating);
        let str = ''
        let tmp = rating.split('/')
        let i = 0
        for (; i < Math.round(tmp[0]); i++) {
            str += '<img width="15" src="./icon/starYellow.png">'
        }
        for (let j = 0; j < 10 - Math.round(tmp[0]); j++) {
            str += '<img width="15" src="./icon/star.png">'
        }
        return str
    }


    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
    }

    function validTitle(value, error) {
        Pattern = /^[a-zA-Z0-9]{3,30}$/
        validation = Pattern.test(value)
        if (validation == true) {
            error.hide()
            return true
        } else {
            error.show()
            return false
        }
    }


    let isSimple = false
    $(".close__sort").on('click', function () {
        if (isSimple == false) {
            $('.close__sort').removeClass().attr('class', 'close__sort bi-arrow-up-circle-fill')
        } else {
            $('.close__sort').removeClass().attr('class', 'close__sort bi-arrow-down-circle-fill')
        }
        $('.block__sort').slideToggle()
        isSimple = !isSimple
    })


    $('#btnSearch').on('click', function () {

        $('.film__list').children().remove()

        let inputTitle = $("#inputTitle").val();
        let selectEpisode = $("#selectEpisode").val();

        let validate = validTitle(inputTitle, $('.error > p'))
        if (validate == true) {

            $.ajax({
                type: "GET",
                url: `http://www.omdbapi.com/`,

                data: {
                    apikey: '1602eefc',
                    s: inputTitle,
                    type: selectEpisode,
                    plot: 'full',
                    error: function () {
                        $('#loading').show()
                    }
                },

                success: function (data) {
                    $('#loading').hide()
                    for (const blockFilm of data.Search) {
                        let tmpImg = blockFilm.Poster
                        if (tmpImg == 'N/A') {
                            tmpImg = './icon/oops-404.webp'
                        }
                        $('.film__list').append(`
            <div data-year="${parseInt(blockFilm.Year)}" class="block__list__film">
            <img class="img__films materialboxed" src="${tmpImg}">
            <div class="films__info">
            <p class = "info__film__type">${blockFilm.Type}</p>
            <h4 class = "info__film__title">${blockFilm.Title}</h4>
            <h3 class = "info__film__year">${blockFilm.Year}</h3>
            <button data-id="${blockFilm.imdbID}" class = "info__film__btn">Details</button>
            </div>               
            </div>`
                        )

                    }

                    // sort

                    $("#sortYearUp").on('click', function () {
                        sort('>')
                    })

                    $("#sortYearDown").on('click', function () {
                        sort("<")
                    })

                    $('.info__film__btn').on('click', function () {

                        $('.modal__window').children().remove()
                        $.ajax({
                            type: "GET",
                            url: `http://www.omdbapi.com/`,
                            data: {
                                plot: 'full',
                                apikey: '1602eefc',
                                i: $(this).attr('data-id'),
                                type: selectEpisode,
                                error: function () {
                                    $('#loading').show()
                                }
                            },

                            success: function (data) {
                                $('#loading').hide()

                                $('.opasity').fadeIn(1000)
                                $('.modal__window').fadeIn(1000)
                                let tmpImg = data.Poster
                                if (tmpImg == 'N/A') {
                                    tmpImg = './icon/oops-404.webp'
                                }
                                $('.modal__window').append(`
                            <p>Film info</p>
                            <div style=" border: 1px solid #ddd; padding: 5px; display: flex;">
                            <img class="img__modal__window" src="${tmpImg}">
                            <div class="table__modal__window">
                            <table>
                            <tr>
                            <td>Title:</td>
                            <td>${data.Title}</td>
                            </tr>
                            <tr>
                            <td>Released:</td>
                            <td>${data.Released}</td>
                            </tr>
                            <tr>
                            <td>Genre:</td>
                            <td>${data.Genre}</td>
                            </tr>
                            <tr>
                            <td>Country:</td>
                            <td>${data.Country}</td>
                            </tr>
                            <tr>
                            <td>Writer:</td>
                            <td>${data.Writer}</td>
                            </tr>
                            <tr>
                            <td>Actors:</td>
                            <td>${data.Actors}</td>
                            </tr>
                            <tr>
                            <td>Awards:</td>
                            <td>${data.Awards}</td>
                            </tr>
                            
                            </table>
                            </div>
                            </div>
                            <div class="btnCloseModalWindow">X</div>
                            `)

                                if (data.Ratings.length != 0) {
                                    $('.table__modal__window > table').append(`<tr>
                                        <td>Rating:</td>
                                        <td data-text = "${data.Ratings[0].Value}" class = "hover__rating">${ratingStars(data.Ratings[0].Value)}</td>
                                        </tr>`)
                                }

                                $('.hover__rating').hover(function () {
                                    $('.block__rating').text($('.hover__rating').attr('data-text'))
                                    $('.block__rating').fadeIn(500)
                                    $('.hover__rating').mousemove(function(e) {
                                        $('.block__rating').css({
                                            top: e.clientY - 30,
                                            left: e.clientX
                                        })
                                    })
                                }, function () {
                                    $('.block__rating').fadeOut(500)
                                })

                                $('.opasity').on('click', function () {
                                    $('.modal__window').fadeOut(1000)
                                    $('.opasity').fadeOut(1000)
                                })
                                $('.btnCloseModalWindow').on('click', function () {
                                    $('.modal__window').fadeOut(1000)
                                    $('.opasity').fadeOut(1000)
                                })
                                //
                            }
                        });
                    })
                }
            });
        }
    })













    //     $('input[type=button]').on('click', () => {

    //        })
    // console.log( window.screen.width);

    //    $('div').animate(
    //     {
    //         left: window.innerWidth - 50
    //     }, 2000)
    //     .animate(
    //         {
    //             top: window.innerHeight - 50
    //         }, 2000)
    //         .animate(
    //             {
    //                 left: 0
    //             }, 2000)
    //             .animate(
    //                 {
    //                     top: 0
    //                 }, 2000)


    // $('div').animate(
    //         {
    //             left: window.innerWidth - 50,
    //             top: window.innerHeight - 50
    //         }, 2000)




})