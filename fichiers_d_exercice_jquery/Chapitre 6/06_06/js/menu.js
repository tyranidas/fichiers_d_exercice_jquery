$(document).ready(function(){
    $('#mainNav li:has(ul) > a').append('<span>&#9660;</span>');
    $('#mainNav li:has(ul)').hover(function(){
        console.log('Entrée ou sortie.')
    });
});