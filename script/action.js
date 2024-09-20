

$(document).ready(function() {
    $('header').load('include/header.html', function(){
        var $headerBg = $('.headerBg');
        var headerHeight = $('header').outerHeight();
        var mainPage = $('body.main').length;

// 서브 페이지에서 무조건 headerBg 보이도록 설정
function mainMenu() {
    var scrT = $(window).scrollTop();
    if (mainPage < 1) {
        $headerBg.show(); // 서브 페이지에서는 항상 보여줌
    } else if (scrT <= 50) {
        $headerBg.stop().fadeOut();
    } else {
        $headerBg.show();
    }
}

headerMenu();
function headerMenu() {
    if (mainPage > 0) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > headerHeight) {
                $headerBg.stop().slideDown();
            } else {
                $headerBg.stop().slideUp();
            }
        });
    } else {
        $headerBg.stop().show();
    }
}

// gnb에서 마우스가 이동할 때 headerBg가 사라지지 않도록 처리
$('.gnb').on('mouseenter', 'li', function () {
    var $lnb = $(this).find('.lnb'); // 현재 li 안에 있는 lnb
    var lnbHeight = $lnb.outerHeight(true); // lnb의 높이 계산 (패딩 포함)

    if ($lnb.length > 0) { // lnb가 있는 경우에만 실행
        var lnbBgClass = $(this).find('.lnb').attr('class').split(' ')[1].replace('lnb', 'lnbBg');
        $('.' + lnbBgClass).stop().slideDown().css('height', lnbHeight); // lnb에 맞게 lnbBg 높이 조정
        $lnb.stop().slideDown();
        if ($(window).scrollTop() <= 50) {
            $headerBg.stop().show(); // 맨 위에 있을 때만 보여줌
        }
    }
});

$('.gnb').on('mouseleave', 'li', function () {
    var $lnb = $(this).find('.lnb');
    if ($lnb.length > 0) {
        var lnbBgClass = $(this).find('.lnb').attr('class').split(' ')[1].replace('lnb', 'lnbBg');
        $lnb.stop().slideUp();
        $('.' + lnbBgClass).stop().slideUp();
    }
});

// gnb 전체에서 마우스가 벗어났을 때만 headerBg 숨기기
$('.gnb').mouseleave(function () {
    if ($(window).scrollTop() <= 50) {
        $headerBg.stop().fadeOut(); // gnb 전체에서 벗어났을 때만 숨김
    }
});

$('.lnbBg').mouseleave(function () {
    var lnbBgClass = $(this).attr('class').split(' ')[1];
    $('.' + lnbBgClass.replace('Bg', '')).stop().slideUp();
    $(this).stop().slideUp();
    mainMenu();
});

        
        // lnb1
        /* $('.gnb > li').eq(0).mouseover(function(){
            $('.gnb > li').eq(0).find('.lnb1').stop().slideDown();
            $('.lnbBg1').stop().slideDown();
            $('.headerBg').show();
        })

        $('.gnb > li').eq(0).mouseleave(function(){
            $('.gnb > li').eq(0).find('.lnb1').stop().slideUp();
            $('.lnbBg1').stop().slideUp();
            headerMenu()
            mainMenu()
        })

        $('.lnbBg1').mouseleave(function(){
            $('.gnb > li').eq(0).find('.lnb1').stop().slideUp();
            $('.lnbBg1').stop().slideUp();
            headerMenu()
            mainMenu()
        })

        // lnb2
        $('.gnb > li').eq(1).mouseover(function(){
            $('.gnb > li').eq(1).find('.lnb2, .lnb2-2').stop().slideDown();
            $('.lnbBg2').stop().slideDown();
            $('.headerBg').show();
        })

        $('.gnb > li').eq(1).mouseleave(function(){
            $('.gnb > li').eq(1).find('.lnb2-2').hide();
            $('.gnb > li').eq(1).find('.lnb2, .lnb2-2').stop().slideUp();
            $('.lnbBg2').stop().slideUp();
            headerMenu()
            mainMenu()
        })

        $('.lnbBg2').mouseleave(function(){
            $('.gnb > li').eq(1).find('.lnb2-2').hide();
            $('.gnb > li').eq(1).find('.lnb2, .lnb2-2').stop().slideUp();
            $('.lnbBg2').stop().slideUp();
            headerMenu()
            mainMenu()
        })

        // lnb3
        $('.gnb > li').eq(2).mouseover(function(){
            $('.gnb > li').eq(2).find('.lnb3').stop().slideDown();
            $('.lnbBg3').stop().slideDown();
            $('.headerBg').show();
        })

        $('.gnb > li').eq(2).mouseleave(function(){
            $('.gnb > li').eq(2).find('.lnb3').stop().slideUp();
            $('.lnbBg3').stop().slideUp();
            headerMenu()
            mainMenu()
        })

        $('.lnbBg3').mouseleave(function(){
            $('.gnb > li').eq(2).find('.lnb3').stop().slideUp();
            $('.lnbBg3').stop().slideUp();
            headerMenu()
            mainMenu()
        })

        // lnb4
        $('.gnb > li').eq(4).mouseover(function(){
            $('.gnb > li').eq(4).find('.lnb4').stop().slideDown();
            $('.lnbBg1').stop().slideDown();
            $('.headerBg').show();
        })

        $('.gnb > li').eq(4).mouseleave(function(){
            $('.gnb > li').eq(4).find('.lnb4').stop().slideUp();
            $('.lnbBg1').stop().slideUp();
            headerMenu()
            mainMenu()
        })

        $('.lnbBg1').mouseleave(function(){
            $('.gnb > li').eq(4).find('.lnb4').stop().slideUp();
            $('.lnbBg1').stop().slideUp();
            headerMenu()
            mainMenu()
        }) */
    })


    $('footer').load('include/footer.html')

    let count = 1;
    let $selectVal;
    let prodTotalVal;
    let prodVal;

    // 금액에 1000단위 콤마 찍는 함수
    function formatPrice(price) {
        return price.toLocaleString() + '원';
    }

    $('.infoSection select').change(function() {
        let $selectText = $(this).find("option:selected").text();
        $selectVal = parseInt($(this).find("option:selected").val());
        let $total = parseInt($('.totalPrice').text().replace(/[^0-9]/g, ''));

        if ($selectVal !== 0) {
            $('.cartCount').append(`<div class="prod_box" data-val='${$selectVal}'><span class="trash_icon"><img src="images/sub-icon_trash.png" alt="trash_icon"></span><span class="prdName">${$selectText}</span><span class="counter"><button class="decrease"><img src="images/sub-icon_decrease.png" alt="decrease_icon"></button><span class="count">${1}</span><button class="increase"><img src="images/sub-icon_increase.png" alt="increase_icon"></button></span></div>`);

            // 첫 상품 가격을 totalPrice에 추가
            $('.totalPrice').text(formatPrice($total + $selectVal));
            $('.infoSection .cartCount').show();

            // 상품 삭제 버튼 클릭 핸들러
            $('.trash_icon').off('click').on('click', function() {
                let $prodBox = $(this).parent('.prod_box');
                let prodVal = parseInt($prodBox.attr('data-val'));
                let count = parseInt($prodBox.find('.count').text());
                let prodTotalVal = prodVal * count;
                
                // 상품을 totalPrice에서 제거
                let $currentTotal = parseInt($('.totalPrice').text().replace(/[^0-9]/g, ''));
                $('.totalPrice').text(formatPrice($currentTotal - prodTotalVal));

                // 상품 삭제
                $prodBox.remove();
            });
        }

        // 수량 증가 버튼 클릭 핸들러
        $('.increase').off('click').on('click', function() {
            let $prodBox = $(this).parents('.prod_box');
            $total = parseInt($('.totalPrice').text().replace(/[^0-9]/g, ''));
            prodVal = parseInt($prodBox.attr('data-val'));
            count = parseInt($(this).siblings('.count').text()) + 1;

            // count 업데이트
            $(this).siblings('.count').text(count);
            // totalPrice 업데이트
            $('.totalPrice').text(formatPrice($total + prodVal));
        });

        // 수량 감소 버튼 클릭 핸들러
        $('.decrease').off('click').on('click', function() {
            let $prodBox = $(this).parents('.prod_box');
            $total = parseInt($('.totalPrice').text().replace(/[^0-9]/g, ''));
            prodVal = parseInt($prodBox.attr('data-val'));
            count = parseInt($(this).siblings('.count').text());
            
            if (count > 1) {
                count--;
                $(this).siblings('.count').text(count);
                // totalPrice 업데이트
                $('.totalPrice').text(formatPrice($total - prodVal));
            }
        });

        // $('.decrease').click(function() {
        //     $total = parseInt($('.totalPrice').text());

        //     if (count > 1) {
        //         count--;
        //         $('.count').text(count);
        //         $('.infoSection .totalPrice').text($total - $selectVal * count + '원');
        //     }
        // });
        
    })



    // $(document).ready(function() {
    //     $('#section03 .centerbox1314 .list li:nth-child(1)').hover(
    //         function() {
    //             // 마우스를 올렸을 때
    //             $(this).find('img.hover').stop().animate({
    //                 transform: 'scale(1)',
    //                 opacity: 1
    //             }, 500); // 0.5초 동안 애니메이션
    //         }, 
    //         function() {
    //             // 마우스가 벗어났을 때
    //             $(this).find('img.hover').stop().animate({
    //                 transform: 'scale(1)',
    //                 opacity: 0
    //             }, 500); // 0.5초 동안 애니메이션
    //         }
    //     );
    // });

    // $(".sns .list, .sns .list2").each(function() {
    //     initRolling($(this));
    // })

    // function initRolling($parent) {
    //     var items = $parent.find("img");
        
    //     var itemLeft = 0;
    //     var itemSize = 0;
    //     var itemGap = convertRemToPixels(0.43); // item 의 간격 [Pixel 크기를 int 형식으로 작성해도 무관함]

    //     $(items).each(function() {
    //         $(this).css("left", itemLeft);
    //         itemLeft += $(this).width() + itemGap;
    //         itemSize = $(this).width();
    //     }
    // )}




    // sub page 
    // #sub_visual .aboutProduct

    // $('.aboutProduct .titleBox h2').click(function(){
    //     $(this).addClass('on').siblings().removeClass('on')
    // })

    $('.aboutProduct .titleBox h2').eq(0).click(function(){
        $('.contentBox .descript').show().siblings().hide()
    })
    $('.aboutProduct .titleBox h2').eq(1).click(function(){
        $('.contentBox .compo').show().siblings().hide()
    })
    $('.aboutProduct .titleBox h2').eq(2).click(function(){
        $('.contentBox .howtouse').show().siblings().hide()
    })


    // #sub_section


    let titWidth, titLeft, titTop, titHeight;

    function titLine(){
        let titleBoxLength = $('.h2Title').length;
        let titleBoxOnLeng = $('.h2Title h2.on').length;

        if(titleBoxLength > 0 && titleBoxOnLeng > 0){
            titWidth = $('.h2Title h2.on').width()
            titLeft = $('.h2Title h2.on').position().left;
            titTop = $('.h2Title h2.on').position().top;
            titHeight = $('.h2Title h2.on').height();
            $('.titLine').css({left: titLeft, width: titWidth, top:titTop + titHeight});
        };        
    }
    titLine()  //새로고침때 실행
    
    $(window).resize(function(){
        titLine()  //화면크기 변경할때 실행
    })

    $('.h2Title h2').mouseenter(function(){
        let titLeft2 = $(this).position().left;
        let titWidth2 = $(this).width();
        $('.titLine').css({left: titLeft2, width: titWidth2});

        $('.h2Title h2').addClass('on').siblings().removeClass('on')
    })

    // $('.h2Title h2').click(function(){
    //     $('.h2Title h2').addClass('on').siblings().removeClass('on')
    // })

    $('.h2Title h2').mouseleave(function(){
        $('.titLine').css({left: titLeft, width: titWidth});
        $('.h2Title h2').eq(0).addClass('on')
    })


    // $('#sub_section .titleBox .centerbox1314 h2').click(function(){
    //     $(this).addClass('on').siblings().removeClass('on');
    // })

    // $('#sub_section .titleBox h2').eq(0).click(function(){
    //     $('#sub_section .contentBox .productInfo').show().siblings().hide();
    //     return false
    // })

    // $('#sub_section .titleBox h2').eq(1).click(function(){
    //     $('#sub_section .contentBox .review').show().siblings().hide();
    //     return false
    // })

    // $('#sub_section .titleBox h2').eq(2).click(function(){
    //     $('#sub_section .contentBox .detail_info').show().siblings().hide();
    //     return false
    // })


    // 더보기 

    $('#btnMore').click(function(){
        $('#detail').removeClass('hidden');
        $('.detailMore').hide();
        $('#sub_section .contentBox .centerbox1314 .productInfo #detail::before').css({display:'none'})
    })

    $('#btnMore2').click(function(){
        $('#detail2').removeClass('hidden');
        $('.detailMore2').hide();
    })

    // #sub_section .photoReview

    $('.reviewBox .right-photo').click(function(){
        $(this).addClass('on');
    })

    $('.reviewBox .left-category h2').click(function(){
        $(this).addClass('on').siblings().removeClass('on')
    })

    let num = 0;
    $('.reviewBox .right-photo').click(function () {
        if(num == 0) {
            $('.reviewBox .right-photo img').attr("src", "./images/sub-icon_photo-color.png");
            num = 1;
        }else {
            $('.reviewBox .right-photo img').attr("src", "./images/sub-icon_photo.png");
            num = 0;
        }
        return false;
    });
});



// sub page 상품정보 - 리뷰 - 구매정보 스크롤 

$('#sub_section .titleBox .centerbox1314 h2 a').eq(0).click(function(){
    var prodInfoOffset = $('.productInfo').offset().top

    $('html').animate({scrollTop: prodInfoOffset -150})

    return false
})

$('#sub_section .titleBox .centerbox1314 h2 a').eq(1).click(function(){
    var reviewOffset = $('.review').offset().top

    $('html').animate({scrollTop: reviewOffset})

    return false
})

$('#sub_section .titleBox .centerbox1314 h2 a').eq(2).click(function(){
    var detailOffset = $('.detail_info').offset().top

    $('html').animate({scrollTop: detailOffset -150})

    return false
})

