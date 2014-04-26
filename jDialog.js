/**
 * 自定义对话框
 * @homepage    http://www.baidufe.com/component/jDialog/index.html
 * @author      zhaoxianlie
 */
(function ( /*importstart*/ ) {
    var scripts = document.getElementsByTagName('script'),
        length = scripts.length,
        src = scripts[length - 1].src,
        pos = src.indexOf('/static/'),
        scriptPath = src.substr(0, pos) + '/static/';
    if (!window.importScriptList) window.importScriptList = {};
    window.importScript = function (filename) {
        if (!filename) return;
        if (filename.indexOf("http://") == -1 && filename.indexOf("https://") == -1) {
            if (filename.substr(0, 1) == '/') filename = filename.substr(1);
            filename = scriptPath + filename;
        }
        if (filename in importScriptList) return;
        importScriptList[filename] = true;
        document.write('<script src="' + filename + '" type="text/javascript"><\/' + 'script>');
    }
})( /*importend*/ );

importScript('widget/jDialog/jquery.drag.js');
importScript('widget/jDialog/jquery.mask.js');
importScript('widget/jDialog/jquery.dialog.js');