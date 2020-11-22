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
    }
});


localStorage.setItem('Item1nome', 'Plano Básico');
localStorage.setItem('Item1desc', 'Plano Básico desc');
localStorage.setItem('Item1preco', 'R$ 39,99');


$('.text-muted').click(function () {
    $('.nome-produto').text(localStorage.getItem('Item1nome'));
});

$('document').ready(() => {
    if (localStorage.getItem('logado') == "true") {
        
        $('#item1').click(function () {
            // window.location.href = 'carrinho.html';


            $('.nome-produto').text(localStorage.getItem('Item1nome'));

 
            // $('.nome-produto').text("Plano básico");
            // $('.nome-desc').text("Item 1 desc");
            // $('.nome-preco').text("R$ 39,99");

            

        });
        $('#item2').click(function () {
            alert('Item adicionado no carrinho!');
        });
        $('#item3').click(function () {
            alert('Item adicionado no carrinho!');
        });
        $('#item4').click(function () {
            alert('Item adicionado no carrinho!');
        });
        $('#item5').click(function () {
            alert('Item adicionado no carrinho!');
        });
        $('#item6').click(function () {
            alert('Item adicionado no carrinho!');
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



