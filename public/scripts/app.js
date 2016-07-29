/**
 * Created by Samuel Urias on 27/07/16.
 *
 * State = 0: Digital clock
 * State = 1: Analog clock
 */

//Modelo
var state = 0;
var viewport        = document.getElementById('viewport');
var changeTrigger   = document.getElementById('change');

changeTrigger.addEventListener('click', function () {

    if(state == 0){
        state = 1;
        // viewport.innerHTML = render(state);
    }
    else {
        state = 0;
    }
});

/* This function returns the actual time */
function now() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var now = [hours, minutes, seconds];

    console.log('hour: ' + hours);
    console.log('minutes: ' + minutes);
    console.log('seconds: ' + seconds);
    console.log('now: ' + now);

    return now;
}

function render(state){
    var time = now();

    console.log('render... ' + state);
    var html = '';
    

    /*Digital Clock*/
    if (state == 0) {
        html = '<div class="digital-clock">' + time[0] + ':' + time[1] + ':' + time[2] +'</div>';
    }
    else{
        html = '' +
            '<div class="analog-clock">\
            <div class="hour rotate-'+ time[2] +'"> \
            <div class="painted"></div>\
            <div class="not-painted"></div>\
            </div>\
            </div>';
    }

    return html;
}
//--- Helper functions
function update(){
    viewport.innerHTML = render(state);
}




//Entry point of the app
setInterval(update, 100);