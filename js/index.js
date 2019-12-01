function init() {

    $(document).ready(function () {

        // show cards randomly
        var reversedData = window.CardData.reverse();
        reversedData.forEach(text => {
            var ranTopVal = Math.random() * 200 + 'px';
            var ranTransVal = 'translateX(' + (Math.random() - 0.3) * 20 + 'vw)'
            var ranWidthVal = 20 + (Math.random() * 5) + 'vw'
            $('.textcardContainer').append(`
            <li
            class="pepTextCard"
            style="top:${ranTopVal}; 
            transform:${ranTransVal}; 
            width:${ranWidthVal};"
            >${text}</li>
        `)
        });

        // set cards as droppable
        $('.pepTextCard').pep({
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
