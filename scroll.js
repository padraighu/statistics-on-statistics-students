var left;
var right;
var single;

function handleEnter(response) {
    response.element.style.opacity = 1;
    switch(response.index) {
        // case 0:
        //     break;
        case 0:
            if (response.direction == 'up') {
                single.destroy();
            }
            break;
        case 1:
            single = growth();
            break;
        case 2:
            gender();
            break;
        case 3:
            if (response.direction == 'up') {
                left.destroy();
                right.destroy();
            }
            single = majorStacked();
            break;
        case 4:
            if (response.direction == 'down') {
                single.destroy();
            }
            left = industry();
            right = industryStacked();
            break;
        case 5:
            if (response.direction == 'down') {
                left.destroy();
                right.destroy();
            }
            employer();
            break;
        case 6:
            if (response.direction == 'up') {
                left.destroy();
                right.destroy();
            }
            single = title();
            break;
        case 7:
            if (response.direction == 'down') {
                single.destroy();
            }
            left = mapRice();
            right = locationRice();
            break;
        case 8:
            left = mapHarvard();
            right = locationHarvard();
            break;
        case 9:
            left = mapDuke();
            right = locationDuke();
            break;
        default:
    }
}

function handleExit(response) {
}

document.addEventListener('DOMContentLoaded', function() {
    const scroller = scrollama();
    scroller
        .setup({
            step: '.section-text',
            offset: 0.33,
            debug: false,
            order: true 
        })
        .onStepEnter(handleEnter)
        .onStepExit(handleExit);  
    window.addEventListener('resize', scroller.resize);
});