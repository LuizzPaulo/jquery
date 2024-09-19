$(document).ready(function(){

    $('#btnInserir').click(function() {
        $('form').slideDown();
        })

    $('#btnCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){

        e.preventDefault(); 

        $('li').click(function () {
            $(this).toggleClass('line-through');
        });

        if (($('#campoUrl').val())!=''){
            $(`<li>${$('#campoUrl').val()}</li>`).appendTo('ul'); 
            $('li').click(function () {
                $(this).toggleClass('line-through');
            });
            $('#campoUrl').val('');
        }
    })
})

