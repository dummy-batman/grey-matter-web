// GREY MATTER - Frontend Logic

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle Login Redirection
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Check which role is selected
            const isExpert = document.getElementById('expert').checked;
            
            if (isExpert) {
                // Redirect to Expert Dashboard
                window.location.href = 'dashboard.html';
            } else {
                // Redirect to Learner Marketplace
                window.location.href = 'learner-home.html';
            }
        });
    }

    // 2. Handle Booking Modal Data
    // This ensures that when you click "Book", the modal shows the right expert's info
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget; // Button that triggered the modal
            const expertName = button.closest('.card-body').querySelector('.brand-serif').textContent;
            const expertRate = button.closest('.card-body').querySelector('strong:last-child').textContent;
            
            // Update the modal's content
            const modalTitle = bookingModal.querySelector('.modal-body h6');
            const modalRateDisplay = bookingModal.querySelector('.bg-light span:last-child');
            
            modalTitle.textContent = expertName;
            modalRateDisplay.textContent = expertRate;
        });
    }
});