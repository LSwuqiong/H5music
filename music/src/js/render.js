//渲染页面，
//避免变量冲突，使用立即执行函数
(function($, root) {
    //渲染图片
    function renderImg(src) {
        var img = new Image();
        img.src = src;
        img.onload() = function() {
            $('.song-box').atrr('src', src);
            root.blurImg(img, $('body'));
        }
    }
    //渲染歌曲信息
    function renderInfo(info) {
        var str = '<div class="song-name">' + info.song + '</div>\
        <div class="singer-name">' + info.ablum + '</div>';
        $('.song-info').html(str);
    }
    //渲染是否喜欢
    function renderIsLike(like) {
        if (like) {
            $('.islike').addClass('isliking');
        } else {
            $('.islike').removeClass('isliking');
        }
    }
    root.render = function(data) {
        console.log(data);
        renderImg(data.image);
        renderInfo(data);
        renderIsLike(data.islike);
    }


})(window.Zepto, window.player || (window.player = {}));