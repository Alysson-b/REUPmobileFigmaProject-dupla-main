document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.Campaigns').addEventListener('click', function(e) {
        // Define the elements
        let today = document.querySelector('#today');
        let thisWeek = document.querySelector('#this-week')

     
        if (home) {
            home.style.display = 'none';
        }
        if (homeImg) {
            homeImg.style.display = 'none';
        }
        if (today) {
            today.style.display = 'flex';
        }
    });


    document.querySelector('.Campaigns').addEventListener('click', function(e) {
        
        let thisWeek = document.querySelector('#this-week');
        let home = document.querySelector('.home-01');
        let homeImg = document.querySelector('.home-img');

        
        if (home) {
            home.style.display = 'none';
        }
        if (homeImg) {
            homeImg.style.display = 'none';
        }
        if (thisWeek) {
            thisWeek.style.display = 'flex';
        }
    });
});