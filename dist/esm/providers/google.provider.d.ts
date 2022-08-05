import 'firebase/compat/auth';
import { GoogleSignInResult, SignInOptions } from '../definitions';
export declare const googleSignInWeb: (options: {
    providerId: string;
    data?: SignInOptions;
}) => Promise<GoogleSignInResult>;
