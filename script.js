document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.horizontal-scroll-container');
    const fixedHeader = document.querySelector('.fixed-header');
    
    // 1. Mouse Wheel Scroll Fix (from previous step)
    scrollContainer.addEventListener('wheel', (e) => {
        if (window.innerWidth > 768) { 
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault(); 
                scrollContainer.scrollLeft += e.deltaY;
            }
        }
    });

    // 2. Hide Header Logic
    scrollContainer.addEventListener('scroll', () => {
        // Check if the user has scrolled away from the very first (intro) slide
        if (scrollContainer.scrollLeft > 50) { // 50 pixels threshold
            fixedHeader.classList.add('hidden');
        } else {
            fixedHeader.classList.remove('hidden');
        }
    });

    console.log('Horizontal scroll script loaded and initialized.');
});
