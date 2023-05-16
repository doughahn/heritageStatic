    if (!localStorage.returning) {
      Swal.fire({
        title: 'High Sierra Distillery is Closed Until Further Notice',
        text: 'As our community feels the impact of the Coronavirus we’ve made the decision to close our Public House and halt all tours until further notice.',
        icon: 'warning',
        showCancelButton: false,
        cancelButtonText: '<a href="https://store.bentlyheritage.com" style="color:white;">Shop Now</a>',
        cancelButtonColor: 'green',
        confirmButtonText: 'I Understand',
        confirmButtonColor: 'green',
        confirmButtonBorder: 'none'
      })
      localStorage.returning = true; 
    }
