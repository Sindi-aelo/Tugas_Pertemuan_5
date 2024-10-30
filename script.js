$(document).ready(function() {
    const sidebar = $('.sidebar');
    const mainContent = $('.main-content');

    // Set default state
    sidebar.removeClass('expanded'); // Default icon-only view
    mainContent.removeClass('shifted'); 

    // Toggle Sidebar on Click
    $('.menu-icon').click(function() {
        sidebar.toggleClass('expanded'); // Toggle kelas 'expanded' pada sidebar
        mainContent.toggleClass('shifted'); // Toggle kelas 'shifted' pada main content
    });

    // Expand sidebar on hover and shrink when not hovered
    sidebar.hover(
        function() {
            $(this).addClass('expanded'); // Tambahkan kelas 'expanded' pada hover
            mainContent.addClass('shifted'); // Tambahkan kelas 'shifted' untuk main content
        },
        function() {
            $(this).removeClass('expanded'); // Hapus kelas 'expanded' saat tidak di-hover
            mainContent.removeClass('shifted'); // Hapus kelas 'shifted' dari main content
        }
    );

    // Efek animasi untuk elemen card dan chart pada halaman
    $('.card, .chart, .budget-container').css({
        position: 'relative',
        bottom: '-100px',
        opacity: 0
    }).animate({
        bottom: '0px',
        opacity: 1
    }, 800); // Animasi lebih cepat

    // Efek hover untuk canvas chart
    $('canvas').hover(
        function() {
            $(this).css({
                filter: 'brightness(1.2)',
                transform: 'scale(1.05)',
                opacity: '1'
            });
        }, 
        function() {
            $(this).css({
                filter: 'brightness(1)',
                transform: 'scale(1)',
                opacity: '0.9'
            });
        }
    );

    // Animation for logo on hover
    $('.logo-name').hover(function() {
        $(this).animate({ fontSize: '28px' }, 200); // Faster animation for font size
    }, function() {
        $(this).animate({ fontSize: '25px' }, 200); // Revert font size
    });

    // Show/hide profile icon on click
    $('.profile-icon').click(function() {
        $(this).find('img').toggle(300); // Faster toggle effect for profile image
    });

    // Bar chart initialization (Chart.js)
    const ctxBar = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie chart initialization (Chart.js) for Expenses
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    const myPieChart1 = new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 2000, 15000, 3000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Pie chart initialization (Chart.js) for Revenue Sources
    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    const myPieChart2 = new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue',
                data: [8000, 12000, 7000, 9000, 5000],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});
