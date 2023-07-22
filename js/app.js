$(document).ready(function () {
    $(".food-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive: [
            {
                breakpoint: 768, // Set your desired breakpoint (for example, 768px for small screens)
                settings: {
                    slidesToShow: 1 // Show only 1 slide on small screens
                }
            },
            {
                breakpoint: 1200, // Set another breakpoint if needed (e.g., 1200px)
                settings: {
                    slidesToShow: 3 // Show 3 slides for larger screens (change this value as per your requirement)
                }
            }
            // Add more breakpoints and settings as needed
        ]
    })
})