function init() {

    $(document).ready(function () {

        // show cards randomly
        var reversedData = window.CardData.reverse();
        reversedData.forEach(cardData => {

            //generate random values
            var ranTopVal = Math.random() * 200 + 'px';
            var ranTransVal = 'translateX(' + (Math.random() - 0.3) * 20 + 'vw)'
            var ranWidthVal = 20 + (Math.random() * 5) + 'vw'

            //case of text card 
            if (cardData.attribute == "text") {

                //convert color text to color code
                var backgroundColor = "rgba(234, 245, 252, 0.719)";
                switch (cardData.colorPattern) {
                    case "lightBlue":
                        backgroundColor = "rgba(234, 245, 252, 0.719)";
                        break;

                    case "lightGreen":
                        backgroundColor = "rgba(200, 247, 234, 0.719)";
                        break;

                    case "blue":
                        backgroundColor = "rgba(174, 189, 231, 0.719)";
                        break;

                    case "purple":
                        backgroundColor = "rgba(238, 220, 249, 0.719)";
                        break;

                    case "blueBlack":
                        backgroundColor = "rgba(180, 180, 196, 0.719)";
                        break;

                    default:
                        break;
                }

                //set values
                $('.cardContainer').append(`
                    <li
                    class="pepTextCard"
                    style="top:${ranTopVal}; 
                    transform:${ranTransVal}; 
                    width:${ranWidthVal};
                    background:${backgroundColor};"
                    >${cardData.content}</li>    
                    `)
            }

            //case of image card 
            if (cardData.attribute == "image") {
                //set values
                $('.cardContainer').append(`
                <li
                class="pepTextCard"
                style="top:${ranTopVal}; 
                transform:${ranTransVal}; 
                width:${cardData.content.imageWidth};
                hight:auto"
                >
                <img src=${cardData.content.imagePath}
                width=${cardData.content.imageWidth}
                hight=${cardData.content.imageHight}
                style="opacity:${cardData.content.imageOpacity}"
                ></img>
                </li>    
                `)
            }

            //case of diagram card 
            if (cardData.attribute == "diagram") {
               //set values
                $('.cardContainer').append(`
                <li
                class="pepTextCard"
                style="top:${ranTopVal}; 
                transform:${ranTransVal}; 
                width:${cardData.content.diagramWidth};
                height:${cardData.content.diagramHeight};
                border: 0;
                border-radius:${cardData.content.diagramBorderRadius};
                background:${cardData.content.diagramBackground};
                opacity:${cardData.content.diagramOpacity};
                ">
                </li>    
                `)
            }

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

        // set smile images as droppable
        $('.pepSmileImageFront').pep({
            droppable: ".droppable",
            overlapFunction: false,
            useCSSTranslation: false,
            drag: function (ev, obj) {
                console.log(obj.activeDropRegions);
            }
        });

        // set smile images as droppable
        $('.pepSmileImageBack').pep({
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
