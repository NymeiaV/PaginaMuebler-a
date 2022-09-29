$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        console.log(scroll);
        $('section').css({
            'background-position-x': - scroll + 'px'
        })
    })
})