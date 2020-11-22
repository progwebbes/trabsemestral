$(document).ready(function () {

    $('.fa-times').click(function () {
        $('.slogan').css('display', 'none')
    });

    $('#confirmaCompra').click(function () {
        $('.pagamento-container').css('display', 'none');
        $('.container-sucesso').css('display', 'block');
    });

    $('#cadastrarDisplay').click(function () {
        $('#loginForm').css('display', 'none');
        $('#cadastroForm').css('display', 'block');
    });

    $('#loginDisplay').click(function () {
        $('#loginForm').css('display', 'block');
        $('#cadastroForm').css('display', 'none');
    });

    $('.confirmaCompra').click(function () {
        $('.formularioCarrinho').css('display', 'none');
        $('.compraConfirmadaDiv').css('display', 'block');
    });

});

$('document').ready(() => {
    if (localStorage.getItem('logado') == "true") {

        $('#logado').text("SAIR");
        $('#carrinho').click(function () {
            window.location.href = 'carrinho.html';
        });
    } else {
        $('#logado').text("LOGIN");
        $('#carrinho').click(function () {
            window.location.href = 'login.html';
        });
        $('.btn-carrinho').click(function () {
            window.location.href = 'login.html';
        });
    }
});


    

$('document').ready(() => {

    
    

    if(localStorage.getItem('Itemnome') == null || localStorage.getItem('Itemnome') == ''){
        $('.nome-produto').text('Carrinho vazio');
        $('.nome-desc').text('Carrinho vazio');
        $('.nome-preco').text('R$ 00,00');

        $('.confirmaCompra').click(function () {
            $('.formularioCarrinho').css('display', 'block');
            $('.compraConfirmadaDiv').css('display', 'none');
        });
    } else{
        $('.nome-produto').text(localStorage.getItem('Itemnome'));
        $('.nome-desc').text(localStorage.getItem('Itemdesc'));
        $('.nome-preco').text(localStorage.getItem('Itempreco'));
    }

    $('.limpar-carrinho').click(function () {
        localStorage.setItem('Itemnome', '');
        localStorage.setItem('Itemdesc', '');
        localStorage.setItem('Itempreco', '');

        location.reload();
    });


    if (localStorage.getItem('logado') == "true") {
        
        $('#item1').click(function () {

            localStorage.setItem('Itemnome', 'Plano Básico');
            localStorage.setItem('Itemdesc', 'Plano Básico desc');
            localStorage.setItem('Itempreco', 'R$ 39,99');
            
            window.location.href = 'carrinho.html';

        });
        $('#item2').click(function () {
            localStorage.setItem('Itemnome', 'Plano Premium');
            localStorage.setItem('Itemdesc', 'Plano Premium desc');
            localStorage.setItem('Itempreco', 'R$ 49,99');
            
            window.location.href = 'carrinho.html';
        });
        $('#item3').click(function () {
            localStorage.setItem('Itemnome', 'Plano Blue');
            localStorage.setItem('Itemdesc', 'Plano Blue desc');
            localStorage.setItem('Itempreco', 'R$ 79,99');
            
            window.location.href = 'carrinho.html';
        });
        $('#item4').click(function () {
            localStorage.setItem('Itemnome', 'Plano Individual 1');
            localStorage.setItem('Itemdesc', 'Plano Básico desc');
            localStorage.setItem('Itempreco', 'R$ 69,99');
            
            window.location.href = 'carrinho.html';
        });
        $('#item5').click(function () {
            localStorage.setItem('Itemnome', 'Plano Individual 2');
            localStorage.setItem('Itemdesc', 'Plano Individual 2 desc');
            localStorage.setItem('Itempreco', 'R$ 79,99');
            
            window.location.href = 'carrinho.html';
        });
        $('#item6').click(function () {
            localStorage.setItem('Itemnome', 'Plano Individual 3');
            localStorage.setItem('Itemdesc', 'Plano Individual 3 desc');
            localStorage.setItem('Itempreco', 'R$ 89,99');
            
            window.location.href = 'carrinho.html';
        });
    } else {

    }
});






$('#logado').click(() => { localStorage.setItem('logado', 'false') });

$('#logar').click((e) => {
    var emailLogin = $('#email');
    var senhaLogin = $('#senha');
    if (emailLogin.val() == localStorage.getItem('login') && senhaLogin.val() == localStorage.getItem('senha')) {
        localStorage.setItem('logado', 'true');
        e.preventDefault();
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos');
    }
});


// Cadastro

$('#cadastrar').click((e) => {
    var email = $('#emailCad');
    var senha = $('#senhaCad');
    var confirma = $('#confirmaCad');

    if (senha.val() != confirma.val()) {
        alert('Senhas precisam ser iguais');
    } else {
        localStorage.setItem('login', email.val());
        localStorage.setItem('senha', senha.val());
        e.preventDefault();
        window.location.href = 'login.html';
    }
});



