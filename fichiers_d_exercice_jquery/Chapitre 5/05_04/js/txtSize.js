$(document).ready(function(){
    $('#txtSize button:not(.active)').on('click', changeTxtSize);
});

function changeTxtSize(evt){
    let clicked = $(evt.target);
    let newSize = clicked.data('size');
    $('#pageContent').css('font-size', `${newSize}rem`);
}
