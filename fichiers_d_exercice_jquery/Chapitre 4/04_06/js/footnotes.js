$(document).ready(function(){
    let footnotes = $('span[data-footnote]');
    if(footnotes){
        footnotes.each(function(index, element){
            let current = $(element);
            let footnoteText = current.data('footnote');
            current.css('text-decoration', 'underline dashed');
        });
    }
});