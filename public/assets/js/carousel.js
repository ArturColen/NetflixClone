const setupScrolling = () => {
    // Store in a constant all elements with class movie-container
    const container = [...document.querySelectorAll('.movie-container')];
    // Store in constants the scroll buttons
    const nextBtn = [...document.querySelectorAll('.next-btn')];
    const prevBtn = [...document.querySelectorAll('.pre-btn')];
    
    container.forEach((item, i) => {
        // Store the dimensions of the container 
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
