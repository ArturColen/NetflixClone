const setupScrolling = () => {
    // Select the elements to be manipulated
    const container = [...document.querySelectorAll('.movie-container')];
    const nextBtn = [...document.querySelectorAll('.next-btn')];
    const prevBtn = [...document.querySelectorAll('.pre-btn')];
    
    container.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        // Create the carousel scrolling event when clicking the buttons
        nextBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });

        prevBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth
        });
    });
}
