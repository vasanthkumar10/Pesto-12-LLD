class BaseAuthSystem {
  authenticate(username) {
    throw new Error("Authenticate is not implemented");
  }
}

class FacebookAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating the user - ${username} using facebook`);
  }
}

class GoogleAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating the user - ${username} using google`);
  }
}

class GithubAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating the user - ${username} using github`);
  }
}

// facade layer
class Auth {
  constructor() {
    this.facebookAuth = new FacebookAuthProvider();
    this.googleAuth = new GoogleAuthProvider();
    this.githubAuth = new GithubAuthProvider();
  }

  facebook(username) {
    this.facebookAuth.authenticate(username);
  }

  google(username) {
    this.googleAuth.authenticate(username);
  }

  github(username) {
    this.githubAuth.authenticate(username);
  }
}

const auth = new Auth();
auth.facebook("dasda");
auth.google("dhsadjas");
auth.github("dadasda");
