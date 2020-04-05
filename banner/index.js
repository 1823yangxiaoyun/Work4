var $banner = (function () {
    var $html = $(''
        + '<div class="slider" id="slider">'
        + '<div class="slide"><img src="img/b5.png" alt=""></div>'
        + '<div class="slide"><img src="img/b1.png" alt=""></div>'
        + '<div class="slide"><img src="img/b2.png" alt=""></div>'
        + '<div class="slide"><img src="img/b3.png" alt=""></div>'
        + '<div class="slide"><img src="img/b4.png" alt=""></div>'
        + '<div class="slide"><img src="img/b5.png" alt=""></div>'
        + '<div class="slide"><img src="img/b1.png" alt=""></div>'
        + '</div>'
        + '<span id="left"><</span>'
        + '<span id="right">></span>'
        + '<ul class="nav" id="navs">'
        + '<li>1</li>'
        + '<li>2</li>'
        + '<li>3</li>'
        + '<li>4</li>'
        + '<li>5</li>'
        + '</ul>'),
        index = 0,
        timer;
    //插入html
    $('#box').append($html);
    //刚开始1 是被点击的
    $("li:eq(0)").addClass('active');
    timer = setInterval(lunbo, 3000);
    //自动轮播
    function lunbo() {
        index++;
        $('li').removeClass('active');
        if(index>=6){
            $(`li:eq(0)`).addClass('active');
        }
        $('#slider').animate({left:-1200*index},"normal",function(){
            if(index>=6){
                $('#slider').css('left','-1200px');
                index=1;
            }
        })
        $(`li:eq(${index - 1})`).addClass('active');
    }
    //点击右箭头
    $('#right').click(lunbo);
    //点击左箭头
    $('#left').click(function () {
        index--;
        $('li').removeClass('active');
        if(index<=0){
            $(`li:eq(5)`).addClass('active');
        }
        $('#slider').animate({left:-1200*index},"normal",function(){
            if(index<=0){
                $('#slider').css('left','-6000px');
                index=5;
            }
        })
        $(`li:eq(${index - 1})`).addClass('active');
    })
     //鼠标划上
     $('#box').mouseenter(function () {
        clearInterval(timer);
        $('#left').animate({ opacity: 0.5 })
        $('#right').animate({ opacity: 0.5 })
    })
    //鼠标划出
    $('#box').mouseleave(function () {
        timer = setInterval(lunbo, 3000);
        $('#left').animate({ opacity: 0 })
        $('#right').animate({ opacity: 0 })

    })
       //点击页面下方圆点
       function nav() {
        $('li').removeClass('active');
        $(this).addClass('active');
        index = Number($(this).html());
       $('#slider').animate({ left: -index * 1200 }, 'normal');
    }
    $('li').bind('click', nav);
}());
