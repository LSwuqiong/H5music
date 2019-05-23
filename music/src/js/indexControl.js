(function($, root) {
    function Control(len) {
        this,
        index = 0;
        this.len = len;
    }
    Control.prototype = {
        prev: function() {
            return this.getIndex(-1);
        },
        next: function() {
            return this.getIndex(1);
        },
        getIndex: function(val) {
            //当前对应索引
            var index = this.index;
            //数据总长度
            var len = this.len;
            this.index = (index + val + len) % len;
            //改变后的索引
            return this.index;
        }
    }
    root.controlIndex = Control;

})(window.Zepto, window.palyer || (window.player = {}));