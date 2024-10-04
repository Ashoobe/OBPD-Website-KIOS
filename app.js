document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.getElementById('homeButton');
    const contentFrame = document.getElementById('contentFrame');
    const mainContent = document.querySelector('.OBPD_main_Content');

    homeButton.addEventListener('click', () => {
        contentFrame.style.display = 'none';
        mainContent.style.display = 'flex';
    });

    window.navigateTo = function(url) {
        contentFrame.src = url;
        contentFrame.style.display = 'block';
        mainContent.style.display = 'none';
    };

    // Implement browsing time limit
    let browsingTimeLimit = 300000; // 5 minutes
    let browsingTimer;

    function resetBrowsingTimer() {
        clearTimeout(browsingTimer);
        browsingTimer = setTimeout(() => {
            // Implement home screen redirection logic
            contentFrame.style.display = 'none';
            mainContent.style.display = 'flex';
            alert('Browsing time limit reached. Returning to home screen.');
        }, browsingTimeLimit);
    }

    document.addEventListener('mousemove', resetBrowsingTimer);
    document.addEventListener('keydown', resetBrowsingTimer);
    resetBrowsingTimer();
});
