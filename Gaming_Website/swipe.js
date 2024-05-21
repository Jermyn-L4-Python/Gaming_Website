

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    const images = document.querySelectorAll('.image img');

    const hoverImages = {
        't1': 'King.gif',
        't2': 'Law.gif',
        't3': 'Raven.gif',
        't4': 'Alisa.gif',
        't5': 'Hwoarang.gif',
        't6': 'Victor.gif'
    };
    
    images.forEach(image => {
        const originalSrc = image.src;
        const id = image.id;
        const hoverSrc = hoverImages[id];
    
        image.addEventListener('mouseover', function() {
            this.src = hoverSrc;
        });
    
        image.addEventListener('mouseout', function() {
            this.src = originalSrc;
        });
    });