$(document).ready(function(){
    let counter = false;

    $('.btn').on('click', function(){

        if(counter === false){
            $('.menu2').addClass('d-opacity');
            counter = true;
        } else{
            $('.menu2').removeClass('d-opacity');
            counter = false;
        }
            
    });

    /*
    Esta funcionalidade soluciona o bug de aparecer dois menus quando se muda a resolução após ter clicado no botão do menu para revelar as opções quando a resolução é de no máximo 783px.
    */

    window.addEventListener('resize', function(){
        if(counter === true){
            const WIDTH = window.innerWidth;
            
            if(WIDTH > 783){
                
                $('.menu2').removeClass('d-opacity');
    
                counter = false;
    
            };
        };
    });


});
