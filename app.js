/**
 * jBar - A JavaScript progress bar library
 * written by : Sandeep Vattapparambil
 */
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.jBar = factory();
    }
})(this, function () {
    var jBar = {};
    jBar.version = '1.0.0';
    var Settings = jBar.settings = {
        parent: 'body',
        template: '<div class="bar"></div>'
    };
    return jBar;
});