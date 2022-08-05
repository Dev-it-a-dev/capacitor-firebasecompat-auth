import firebase from 'firebase/compat/app';
import { Observable, UnaryFunction } from 'rxjs';
/**
 * Operator to map firebase.User to firebase.UserInfo.
 *
 * Sample of use:
 *
 * ```ts
 * import {cfaSignIn, mapUserToUserInfo} from 'capacitor-firebase-auth';
 * import {UserInfo} from 'firebase/compat/app';
 *
 * cfaSignIn('google.com').pipe(
 *     mapUserToUserInfo(),
 * ).subscribe(
 *     (user: UserInfo) => console.log(user.displayName);
 * )
 * ```
 */
export declare const mapUserToUserInfo: () => UnaryFunction<Observable<firebase.User>, Observable<firebase.UserInfo>>;
/**
 * Operator to map firebase.auth.UserCredential to firebase.UserInfo.
 *
 * For use with alternative facade only.
 *
 * Sample of use:
 *
 * ```ts
 * import {cfaSignIn, mapUserToUserInfo} from 'capacitor-firebase-auth/alternative';
 * import {UserInfo} from 'firebase/compat/app';
 *
 * cfaSignIn('google.com').pipe(
 *     mapUserToUserInfo(),
 * ).subscribe(
 *     (user: UserInfo) => console.log(user.displayName);
 * )
 * ```
 */
export declare const mapUserCredentialToUserInfo: () => UnaryFunction<Observable<{
    userCredential: firebase.auth.UserCredential;
}>, Observable<firebase.UserInfo | null>>;
