// script.js
document.addEventListener('DOMContentLoaded', () => {
    const galleries = [
        { id: 'cert-gallery', rowHeight: 400 },
        { id: 'proj-gallery', rowHeight: 400 },
        { id: 'collab-gallery', rowHeight: 400 }
    ];

    galleries.forEach(galleryInfo => {
        const gallery = document.getElementById(galleryInfo.id);
        const rows = gallery.querySelectorAll('.row').length;
        let current = 0;

        // Auto-scroll every 10 seconds
        setInterval(() => {
            current = (current + 1) % rows;
            gallery.scrollTo({
                top: current * galleryInfo.rowHeight,
                behavior: 'smooth'
            });
        }, 10000);

        // Manual scroll buttons
        const prevBtn = document.querySelector(`.prev[data-gallery="${galleryInfo.id}"]`);
        const nextBtn = document.querySelector(`.next[data-gallery="${galleryInfo.id}"]`);

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + rows) % rows;
            gallery.scrollTo({
                top: current * galleryInfo.rowHeight,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % rows;
            gallery.scrollTo({
                top: current * galleryInfo.rowHeight,
                behavior: 'smooth'
            });
        });
    });
});