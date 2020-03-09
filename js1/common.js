// PCサイドメニュー
$('.nav-open').on('click',function(){
    $(this).next('.nav-child').slideToggle(700);
    $(this).find('.fa-plus').toggleClass('open');
    return false;
});

// メインスライダー
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    slidesToShow:3,
    slidesToScroll:2
});

// 楽天検索ボックス
function Form_Load() {
    if (this.searchForm.sitem.value.length > 0) {
      target = document.getElementById("clear_button");
      target.style.visibility = "visible";
    }
  }

// SPハンバーガーメニュー
    $(function () {
        $('#nav-toggle').on('click', function() {
            $('body').toggleClass('open');
        });
        $('#navigation li').on({
            'mouseenter' : function(){
                var index = $(this).index();
                $('#nav-bg-wrap .nav-bg').eq(index).addClass('active');
                
            },
            'mouseleave' : function(){
                var index = $(this).index();
                $('#nav-bg-wrap .nav-bg').eq(index).removeClass('active');
            }
        });
    });

// SPカテゴリーアコーディオン
$('.cat__menu__item__link').on('click',function(){
    $(this).next('.cat__submenu').slideToggle(700);
    $(this).find('.fa-plus').toggleClass('open');
    return false;
});



	//★ ○○○_pcと○○○_spの画像を切り替える
	// 置換の対象とするclass属性。
	var $elem = $('.img-switch');
	// 置換の対象とするsrc属性の末尾の文字列。
	var sp = '_sp.jpg';
	var pc = '.jpg';
	// 画像を切り替えるウィンドウサイズ。
	var replaceWidth = 1025;
	function imageSwitch() {
		// ウィンドウサイズを取得する。
		// var windowWidth = parseInt(window.innerWidth);
        var windowWidth = $(window).width();
		// ページ内にあるすべての`.js-image-switch`に適応される。
		$elem.each(function() {
			var $this = $(this);
			// ウィンドウサイズが1025px以上であれば_spを_pcに置換する。
			if(windowWidth >= replaceWidth) {
				$this.attr('src', $this.attr('src').replace(sp, pc));

			// ウィンドウサイズが1025px未満であれば_pcを_spに置換する。
			} else {
				$this.attr('src', $this.attr('src').replace(pc, sp));
			}
			});
	}
	imageSwitch();

$(function() {
    var w = $(window).width();
    var sp = 500;
    var pc = 1024;
    if (w <= x) {
        $('#sample').css({
            color: 'red'
        });
    }
});