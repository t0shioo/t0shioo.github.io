$(document).ready(function () {
    
    // Esconde as seções de bebidas e comidas ao carregar a página
    $(".imagens_bebida, .imagens_comida").hide();

    // Expande ou recolhe as bebidas ao clicar no ícone do café
    $("#cafe").click(function () {
        $(".imagens_comida").slideUp("fast");
        $(".imagens_bebida").slideToggle("fast", function(){
            ajustaAltura($(this))
        });
    });

    // Expande ou recolhe as comidas ao clicar no ícone do sanduíche
    $("#sanduiche").click(function () {
        $(".imagens_bebida").slideUp("fast");
        $(".imagens_comida").slideToggle("fast", function(){
          ajustaAltura($(this))
        }); 
    });

    // Open modal with the clicked image
    $('.menu-item-wrapper img').click(function() {
        var src = $(this).attr('src');
        $('#modal-image').attr('src', src);
        $('#caption').text($(this).siblings('.legenda').text()); // Set the caption text
        $('#modal').css({visibility:'visible', opacity:0}).fadeTo(200, 1) // Smooth fade-in

        $('.cabecalho, .rodape').addClass('blurred');
    });


    // Close the modal when the close button is clicked
    $('.close').click(function() {
        $('#modal').fadeTo(200, 0, function(){
            $(this).css({visibility: 'hidden'})

            $('.cabelho, .rodape').removeClass('blurred')
        }); // Smooth fade-out
    });

    // Close the modal when clicking outside of the image
    $('#modal').click(function(event) {
        if (event.target === this){
            $(this).fadeTo(220, 0, function(){
                $(this).css({visibility:'hidden'})

                $('.cabecalho, .rodape').removeClass('blurred')
            }); // Smooth fade-out
        }
    });

    function ajustaAltura($element){
        if ($element.is(":visible")){
            $element.closest(".menu-container").css("max-height", $element.height() + "px")
        } else {
            $element.closest(".menu-container").css("max-height","0")
        }
    }
    
});
    function mostraModal(img){
        const modal = document.getElementById("modal")
        const modalImagem = document.getElementById("modal-image")
        const modalDescription = document.getElementById("descricao-modal")
        const modalCaption = document.getElementById("caption")
        modalImagem.src = img.src
        modalCaption.textContent = img.nextElementSibling.textContent
        modalDescription.textContent = img.getAttribute("data-description")
        
        modal.style.display = "block"
    }


  