"use strict";

import Auth from "@aws-amplify/auth";
import { portalConfig } from "./portalConfig";

let instance;

export default {
  getInstance(params = {}) {
    if (!instance) {
      instance = new AmplifyService(params);
    }
    return instance;
  }
};

// TODO: Dynamic config based on environmenty
class AmplifyService {
  constructor({ aws = Auth, config = portalConfig } = {}) {
    this.aws = aws;
    this.aws.configure({
      Auth: {
        mandatorySignIn: true,
        region: config.dev.aws.cognito.REGION,
        userPoolId: config.dev.aws.cognito.USER_POOL_ID,
        identityPoolId: config.dev.aws.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.dev.aws.cognito.APP_CLIENT_ID
      }
    });
    this.jwt = null;
  }

  signIn(form) {
    return this.aws.signIn(form);
  }

  signUp(form) {
    return this.aws.signUp(form);
  }

  confirmSignUp(username, code) {
    return this.aws.confirmSignUp(username, code);
  }

  async signOut(errorMessage = "") {
    await this.aws.signOut();
  }

  checkUser() {
    return this.aws.currentAuthenticatedUser();
  }
}
