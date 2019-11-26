$(document).ready(() => {
    $('.content-grid-item').hover(
        function() { 
            $(this).find('.game-button')
                   .not(document.getElementById('stay-gray'))
                   .fadeTo('fast', 1);
        },
        function() { 
            $(this).find('.game-button')
                   .not(document.getElementById('stay-gray'))
                   .fadeTo('fast', 0.1); 
        });
});