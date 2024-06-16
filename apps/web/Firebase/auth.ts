import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";
import firebase_app from "./config";

export const auth = getAuth(firebase_app);
const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({ prompt: "select_account" });

export class Authentication {
  private static instance: Authentication;
  private constructor() {}
  public static getInstance(): Authentication {
    if (!Authentication.instance) {
      Authentication.instance = new Authentication();
    }
    return Authentication.instance;
  }

  async signInWithGoogle() {
    let res = null;
    let error = null;
    try {
      res = await signInWithPopup(auth, googleprovider);
      return { res, error };
    } catch (error: any) {
      console.log(error.message);
      return { res, error: error };
    }
  }

  async signout() {
    let res = null;
    let error = null;
    try {
      res = await signOut(auth);
      return { res, error };
    } catch (error: any) {
      console.log(error.message);
      return { res, error: error };
    }
  }
}
