/**
 * Created by kurt on 17/10/9.
 */



$(function(){
    $("body").append("<a class=\"jumptotop dn\">&nbsp;</a>");

    var backgroundimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAYAAADBNhlmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADZmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjlFQjMyNjVFODU3Q0U1MTE5Qjg2QjFFOTNCNzRFODM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjczOEFDOEIwN0M4NTExRTVCOEYxRTdGMkM3NEFBMjRGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjczOEFDOEFGN0M4NTExRTVCOEYxRTdGMkM3NEFBMjRGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUZCMzI2NUU4NTdDRTUxMTlCODZCMUU5M0I3NEU4MzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUVCMzI2NUU4NTdDRTUxMTlCODZCMUU5M0I3NEU4MzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4T/3wYAAAAoUlEQVRYR+3XPQpDIRBFYZMt6zLccx4BB0J4PzrnFhb3NE41fGjlq9b6KRv3Hue2GUgzkGYgzUCagTQpsPc+Jl0yYODUSAnwH6VEYuAvprU2Jh0SAc9wamQaeHVz35TIFPAOF6mQy8AZXKRALgFXcBFFTgMzuIggp4AEF2WRj0AFLsogp5+Y4qLVPf640wykGUgzkGYgzUCagTQDaZsDSzkAjEREk7+r8tIAAAAASUVORK5CYII=";

    var jumpitem =  $(".jumptotop");

    jumpitem.css({
        "background-image":"url("+backgroundimg+")",
        "position":"fixed",
        "right":"1rem",
        "bottom": "2rem",
        "width":"40px",
        "height":"40px",
        "cursor": "pointer",
        "display":"none"
    });

    var thisjumpbottom = $(".jumptotop");
    var scrolltopdate =0;
    $(window).scroll(function(){
        scrolltopdate = $(document).scrollTop();
        if(scrolltopdate>200){
            thisjumpbottom.show();
        }else{
            thisjumpbottom.hide();
        }

    });

    jumpitem.click(function(event){
        event.preventDefault();
        $("html , body").animate({"scrollTop":0},300);
    });
});
