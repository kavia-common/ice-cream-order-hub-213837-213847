// Global app JS for all static screens generated
(function(){
  // Accessibility enhancements: focus outline only for keyboard users
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.documentElement.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
  console.log('app.js initialized');
})();
