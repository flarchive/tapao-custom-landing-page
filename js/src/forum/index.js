import app from 'flarum/forum/app';

app.initializers.add('tapao/custom-landing-page', () => {
  const params = new URLSearchParams(window.location.search);
  const modal = params.get('modal');
  
  if (modal) {
    // Wait for the Flarum SPA to mount and render the header
    setTimeout(() => {
      if (modal === 'login') {
        const loginBtn = document.querySelector('.item-logIn button, .item-logIn a');
        if (loginBtn) loginBtn.click();
      } else if (modal === 'register' || modal === 'signup') {
        const signupBtn = document.querySelector('.item-signUp button, .item-signUp a');
        if (signupBtn) signupBtn.click();
      }
    }, 500);
  }
});
