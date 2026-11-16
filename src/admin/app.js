const config = {
  locales: [],
  translations: {
    en: {
      "Auth.form.welcome.title": "Welcome to Musical Touch",
      "Auth.form.welcome.subtitle": "Sign in to manage your platform",
      "Auth.form.email.label": "Email address",
      "Auth.form.password.label": "Password",
      "Auth.form.button.login": "Sign In",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
