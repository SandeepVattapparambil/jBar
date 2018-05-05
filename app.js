/**
 * jBar - A JavaScript progress bar library
 * written by : Sandeep Vattapparambil
 */
;
((root, factory) => {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.jBar = factory();
    }
})(this, () => {
    var jBar = {};
    jBar.version = '1.0.0';
    var Settings = jBar.settings = {
        parent: 'body',
        template: '<div class="bar"></div>'
    };

    jBar.init = (options) => {
        var key, value;
        for (key in options) {
            value = options[key];
            if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
        }
        return this;
    };

    jBar.status = null;

    jBar.set = (maxWidth) => {
        var elem = document.createElement('div');
        elem.setAttribute('style','width: 0; height: 5px; background-color: #cddc39');
        document.querySelector(Settings.parent).appendChild(elem);
        var width = 0;
        var id = setInterval(frame, 20);

        function frame() {
            if (width >= maxWidth) {
                clearInterval(id);
                elem.style.display = 'none';
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }

    return jBar;
});