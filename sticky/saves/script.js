var selected=null;
function fnc(el) {
    if(selected!==null){
        $(selected).css({'background-color':'black'});
        $(selected).css({'border-color':'black'});
    }
    selected=el;
    $(el).css({'background-color':'#EC1D23'});
    $(el).css({'border-color':'#EC1D23'});
    // $(el).css({'height':'110%'});
    var obj = JSON.parse(localStorage.getItem('stickers'));
    if(obj===null||obj[el.name]===undefined){
        $('#' + el.name).html("<br><center> NO RESULTS </center><br>")
        return;
    }
    $('#' + el.name).html("<br>");
    for (var i = 0; i < Math.min(obj[el.name].length, 5); i++) {
        var str=obj[el.name][i].substring(0,obj[el.name][i].length-3)+'gif';
        $('#' + el.name).append("<a href='" + str + "' download> <video poster='loader.gif' src='" + obj[el.name][i] + "' autoplay loop></a>");
    }
}
