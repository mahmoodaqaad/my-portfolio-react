import React from 'react'
import ScrollReveal from 'scrollreveal';

export const Scroll = () => {
         ScrollReveal().reveal('.top', {
            origin: 'top',
            distance: '80px',
            duration: 1500,
            delay: 40,
        });
        ScrollReveal().reveal('.left', {
            origin: 'left',
            distance: '80px',
            duration: 1500,
            delay: 30,
        });

        ScrollReveal().reveal('.right', {
            origin: 'right',
            distance: '80px',
            duration: 1500,
            delay: 30,
        });

        ScrollReveal().reveal('.bottom', {
            origin: 'bottom',
            distance: '80px',
            duration: 1500,
            delay: 30,
        });
}

  
