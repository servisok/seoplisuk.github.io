$(document).ready((function(){$(".burger").click((function(s){$(".burger__menu").toggleClass("open"),$(".burger").toggleClass("active")})),$(".close").click((function(s){$(".burger__menu").removeClass("open")})),$(".m1").click((function(s){$(".left__menu").removeClass("open"),$(".burger").removeClass("active")}))})),$(".slider1").slick({slidesToShow:1,slidesToScroll:1,fade:!1,dots:!0,arrows:!0,infinite:!0,autoplay:!1,appendArrows:$(".appendArrows1"),appendDots:$(".appendDots1"),responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider2").slick({slidesToShow:1,slidesToScroll:1,fade:!1,dots:!1,arrows:!0,infinite:!0,autoplay:!1,appendArrows:$(".appendArrows2"),responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider3").slick({slidesToShow:4,slidesToScroll:1,fade:!1,dots:!1,arrows:!0,infinite:!0,autoplay:!1,appendArrows:$(".appendArrows3"),responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider4").slick({slidesToShow:4,slidesToScroll:1,fade:!1,dots:!1,arrows:!0,infinite:!0,autoplay:!1,appendArrows:$(".appendArrows4"),responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider5").slick({slidesToShow:8,slidesToScroll:1,fade:!1,dots:!1,arrows:!0,infinite:!0,autoplay:!1,appendArrows:$(".appendArrows5"),responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider6").slick({slidesToShow:4,slidesToScroll:1,fade:!1,dots:!1,arrows:!0,infinite:!0,autoplay:!1,appendArrows:$(".appendArrows6"),responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider7").slick({slidesToShow:3,slidesToScroll:1,fade:!1,dots:!1,arrows:!0,infinite:!0,autoplay:!1,appendArrows:$(".appendArrows7"),responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]}),jQuery("img.svg").each((function(){var s=jQuery(this),e=s.attr("id"),o=s.attr("class"),i=s.attr("src");jQuery.get(i,(function(i){var l=jQuery(i).find("svg");void 0!==e&&(l=l.attr("id",e)),void 0!==o&&(l=l.attr("class",o+" replaced-svg")),l=l.removeAttr("xmlns:a"),s.replaceWith(l)}),"xml")})),$(window).scroll((function(){$("header").toggleClass("new",$(this).scrollTop()>210)})),document.addEventListener("mousewheel",(s=>{}),{passive:!0}),document.addEventListener("wheel",(s=>{}),{passive:!0}),document.addEventListener("scroll",(s=>{}),{passive:!0}),document.addEventListener("touchstart",(s=>{}),{passive:!0}),document.addEventListener("touchend",(s=>{}),{passive:!0}),document.addEventListener("touchmove",(s=>{}),{passive:!0}),$(".filter__content").hide(),$(".filter__top").click((function(){$(this).siblings(".filter__content").slideToggle(300),$(this).find(".filter__arrow").toggleClass("minus")}));