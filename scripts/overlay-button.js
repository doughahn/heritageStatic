var body = document.body,
    overlay = document.querySelector('.overlay'),
    overlayBtts = document.querySelectorAll('button[class$="hamburger-icon"]');
    
[].forEach.call(overlayBtts, function(btt) {

  btt.addEventListener('click', function() { 
     
     /* Detect the button class name */
     var overlayOpen = this.className === 'hamburger-icon';
     
     /* Toggle the aria-hidden state on the overlay and the 
        no-scroll class on the body */
     overlay.setAttribute('aria-hidden', !overlayOpen);
     body.classList.toggle('noscroll', overlayOpen);
     
     /* On some mobile browser when the overlay was previously
        opened and scrolled, if you open it again it doesn't 
        reset its scrollTop property after the fadeout */
     setTimeout(function() {
         overlay.scrollTop = 0;              }, 1000)

  }, false);

});
