webpackJsonp([42],{0:function(t,o,i){i(5),t.exports=i(123)},122:function(t,o,i){"use strict";function d(t,o,i){return new Promise(function(d){t.animate(o,i,d)})}var e=i(19),n=e(".dot"),s=e(".target"),c=1e3,p=d(s,n.eq(0).position(),c);n.filter(":not(:first-child)").each(function(t){var o=e(this);p=p.then(function(){d(s,o.position(),c)})})},123:function(t,o,i){"use strict";document.querySelector("#main").innerHTML=i(395),i(122)},395:function(t,o){t.exports="<style>.dots{position:relative;height:1000px}.dot,.target{position:absolute;width:10px;height:10px;border-radius:50%}.target{top:100px;left:500px;background-color:#f60}.dot{background-color:#ddd}.dot:nth-child(1){top:120px;left:520px}.dot:nth-child(2){top:140px;left:580px}.dot:nth-child(3){left:620px;top:140px}.dot:nth-child(4){left:720px;top:220px}</style> <div class=dots> <div class=dot></div> <div class=dot></div> <div class=dot></div> <div class=dot></div> <div class=target></div> </div>"}});