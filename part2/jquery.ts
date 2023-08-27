// removeClass(className_function?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string)): this;
// addClass(className_function: JQuery.TypeOrArray<string> | ((this: TElement, index: number, currentClassName: string) => string)): this;

// 매개변수가 3개가 아니라 this를 제외하고 2개이다.
$("p").removeClass((index, className) => {
    return "myClass";
});
$("p").removeClass("myClass noClass").addClass("yourClass");
$(["p", "t"]).text("hello");
const tag = $("ul li").addClass(function (index) {
    return "item-" + index;
});
$(tag).html(function (i: number) {
    console.log(this);
    return $(this).data("name") + "입니다";
});
