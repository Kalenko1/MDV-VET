document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.gallery_item img');
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modalImage.src = images[currentIndex].src;
        modal.classList.add('show');
    }

    function closeModal() {
        modal.classList.remove('show');
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentIndex].src;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.src = images[currentIndex].src;
    }

    // Dodavanje event listener-a za svaku sliku
    images.forEach((image, index) => {
        image.addEventListener('click', () => openModal(index));
    });

    // Dugmad za zatvaranje i navigaciju
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Zatvaranje modala na Escape dugme
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });

    // Zatvaranje kliktanjem van slike
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});
