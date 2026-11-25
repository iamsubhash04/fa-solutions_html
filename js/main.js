document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const mainNav = document.querySelector('.main-nav');
            const dropdownParents = document.querySelectorAll('.has-dropdown');

            menuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('is-open');
                menuToggle.classList.toggle('is-active');
            });

            dropdownParents.forEach(parent => {
                const link = parent.querySelector('a');
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 1024) {
                        e.preventDefault();
                        parent.classList.toggle('is-open');
                    }
                });
            });
        });