import Controller from '@ember/controller';

// TODO: Create a modal
// TODO: Put login to a component (including sign up)
// TODO: Put user info into a component (including logout, user name)
// TODO: sign up logic
// TODO: valide email + error message
// TODO: callback when sigin
export default Controller.extend({
  actions: {
    showSignInWithEmail() {
      this.set('signInWithEmail', true);
    },

    showSignIn() {
      this.set('showSignUp', false);
    },

    showSignUp() {
      this.set('showSignUp', true);
    },

    signIn(provider) {
      const options = { provider };
      if (provider === 'password') {
        options.email = this.get('loginEmail');
        options.password = this.get('loginPassword');
      }
      console.log(JSON.stringify(options));
      this.get('session')
        .open('firebase', options)
        .then(data => console.log(data.currentUser));
    },

    signUp() {
      console.log(`sign up clicked`);
    },
  },
});
