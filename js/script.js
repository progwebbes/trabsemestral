$(document).ready(function() {

    $('.fa-times').click(function(){
        $('.slogan').css('display','none')
    });

    $('#confirmaCompra').click(function(){
        $('.pagamento-container').css('display','none');
        $('.container-sucesso').css('display','block');
    });

    $('#cadastrarDisplay').click(function(){
        $('#loginForm').css('display','none');
        $('#cadastroForm').css('display','block');
    });

    $('#loginDisplay').click(function(){
        $('#loginForm').css('display','block');
        $('#cadastroForm').css('display','none');
    });

    $('.confirmaCompra').click(function(){
        $('.formularioCarrinho').css('display','none');
        $('.compraConfirmadaDiv').css('display','block');
    });


});