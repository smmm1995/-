/**
 * Created by Administrator on 2016/9/27.
 */
$.fn.slide=function(options){
    this.each(function(i,ele){
        res(ele,options)
    })
}
function res(ele,options) {
    var $ele = $(ele)
    var def = {
        direction: 'right',
        width: 100,
        height:100
    }
    $.extend(def, options)
    var a,b
    if (options.direction == "right") {
        a={
            right:options.width
        }
        b={
            right:0
        }

    }else{
        a={
            top:-options.height
        }
        b={
            top:0
        }
    }
        $ele.find('span').eq(0).click(function () {

            $ele.find('ul').stop(true,true).animate(a, 1000, function () {
                $ele.find('ul').css(b)
                $ele.find('li').eq(0).appendTo($ele.find('ul'))
            })

        })
        $ele.find('span').eq(1).click(function () {

            $ele.find('ul').css(a).find('li').last().prependTo($ele.find('ul'))
            $ele.find('ul').stop(true,true).animate(b, 1000)

        })

    }

