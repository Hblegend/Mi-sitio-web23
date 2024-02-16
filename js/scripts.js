window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var offset = window.pageYOffset * 0.5; // Ajusta este valor para cambiar cuánto se mueven el encabezado y el pie de página
    header.style.transform = 'translateY(-' + offset + 'px)';
    footer.style.transform = 'translateY(' + offset + 'px)';
});

document.addEventListener('DOMContentLoaded', function() {
    var iniciarSesion = document.querySelector('.protest-strike-regular');
    var modal = document.getElementById('myModal');
    var close = document.querySelector('.close');

    iniciarSesion.onclick = function() {
        modal.style.display = 'block';
    }

    close.onclick = function() {
        modal.style.animation = 'fadeOut 0.5s';
        setTimeout(function() {
            modal.style.display = 'none';
            modal.style.animation = 'fadeIn 0.5s';
        }, 500);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.animation = 'fadeOut 0.5s';
            setTimeout(function() {
                modal.style.display = 'none';
                modal.style.animation = 'fadeIn 0.5s';
            }, 500);
        }
    }
});
