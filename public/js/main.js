(function(){
  // constants
  var GRID_OFF_TEXT = 'Hide grid'
  var GRID_ON_TEXT = 'Show grid'
  var GRID_BTN_ID = 'toggle-grid'
  var GRID_SHOW_CLASS = 'show-grid'
  
  document
    .getElementById(GRID_BTN_ID)
    .addEventListener("click", function (e) {
      e.preventDefault
      document.body.classList.toggle('show-grid')
      this.innerHTML =  (
        document.body.classList.contains(GRID_SHOW_CLASS) 
        ? GRID_OFF_TEXT 
        : GRID_ON_TEXT
       )
    });
})();