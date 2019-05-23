(function($, root) {
    //渲染左右两块时间
    var duration = 0;
    var frameId = null;
    var startTime = null;
    var lastPer = 0;
    //渲染总时间
    function renderAllTime(time) {
        duration = time;
        time = formatTime(time);
        //切换歌曲需要初始化上一段播放时间
        lastPer = 0;
        $('.last-time').html(time);
    }
    //格式化:将 秒--》分 ： 秒
    function formatTime(t) {
        t = Math.floor(t);
        //t为总的描述
        var m = Math.floor(t / 60);
        var s = t - m * 60;
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        return m + ':' + s;
    }

    function start(p) {
        lastPer = p === undefined ? lastPer : p;
        //存放当前点击播放的时候的时间戳
        startTime = new Date().getTime();

        function frame() {
            //当前歌曲播放的总进度=上一段的进度+当前断的进度
            var per = lastper + (curTime - startTime) / duration * 1000;
            update(per);
            frameId = requestAnimationFrame(frame);

        }
        frame();
    }
    // 播放暂停区间保存
    // 0 ---》3 lastPer = 3s  per = 3
    // 4 --> 9  lastPer = 5s  per = 5
    // 9 --》 13 lastPer = 4s  per = 4
    function stop() {
        cancelAnimationFrame(frameId);
        var curTime = new Date().getTime();
        var per = (curTime - startTime) / (duration * 1000);
        lastPer += per;
    }
    //更新当前时间+更新进度条
    function update(per) {
        var curTime = per * duration;
        curTime = formatTime(curTime);
        $('first-time').html(curTime);
        var translatex = (per - 1) * 100 + '%';
        $('.pro-top').css({
            transform: 'translatex(' + translatex + ')'
        });
    }
    root.time = {
        renderAllTime: renderAllTime,
        start: start,
        stop: stop,
        update: update

    }
})(window.Zepto, window.player || (window.player = {}));