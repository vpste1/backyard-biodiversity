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

class AmplifyService {
  constructor({ aws = Auth, config = portalConfig } = {}) {
    this.aws = aws;
    this.aws.configure({
      Auth: {
        mandatorySignIn: true,
        region: config.aws.cognito.REGION,
        userPoolId: config.aws.cognito.USER_POOL_ID,
        identityPoolId: config.aws.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.aws.cognito.APP_CLIENT_ID
      }
    });
    this.jwt = null;
  }

  signIn(username, password) {
    return this.aws.signIn(username, password);
  }

  async signOut(errorMessage = "") {
    await this.aws.signOut();
  }

  checkUser() {
    return this.aws.currentAuthenticatedUser();
  }
}
