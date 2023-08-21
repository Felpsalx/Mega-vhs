$(document).ready(function(){

    $('#tel').mask('(00) 00000-0000', 
        {'placeholder':'(11) 12345-6789'}
    ); 



    $("#form").validate({
    rules : {
        nome:{
                    required:true,
                    minlength:3
        },
        email:{
                    required:true
        },
        mensagem:{
                    required:true
        }                                 
    },
    messages:{
        nome:{
                    required:"Por favor, informe seu nome",
                    minlength:"O nome deve ter pelo menos 3 caracteres"
            },
        email:{
                    required:"É necessário informar um email"
        },
        msg:{
                    required:"Nos informe detalhes sobre o filme que deseja alugar, e seu endereço para entrega"
        }      
    }
});
})