import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { TwitterSignInResult } from '../definitions';
export const twitterSignInWeb = async () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().useDeviceLanguage();
    const userCredential = await firebase.auth().signInWithPopup(provider);
    const credential = userCredential === null || userCredential === void 0 ? void 0 : userCredential.credential;
    return new TwitterSignInResult(credential.accessToken, credential.secret);
};
//# sourceMappingURL=twitter.provider.js.map