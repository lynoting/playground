function init() {

$(document).ready(function () {
    var reversedData = window.CardData.reverse();
    reversedData.forEach(text => {
        var ranTopVal = Math.random() * 100 + 'px';
        var ranTransVal = 'translateX(' + Math.random() * 200 + 'px)'
        var ranWidthVal = 200 + (Math.random() * 100) + 'px'

        $('.js-textcardContainer').append(`
            <li 
            class="pepTextCard"
            style="top:${ranTopVal}; 
            transform:${ranTransVal}; 
            width:${ranWidthVal};
            line-height: 1.5em";
            >${text}</li>
        `)
    })

    $('.pepTextCard').pep({
        droppable: ".droppable",
        overlapFunction: false,
        useCSSTranslation: false,
        drag: function (ev, obj) {
            console.log(obj.activeDropRegions);
        }
    });

    $('.pepImage').pep({
        droppable: ".droppable",
        overlapFunction: false,
        useCSSTranslation: false,
        drag: function (ev, obj) {
            console.log(obj.activeDropRegions);
        }
    });
});

}
 
window.onload = init();
