import { TDecodedToken } from '@/types/auth.types';
import {jwtDecode} from 'jwt-decode'



const verifyToken = (token:string)=>{
    try{const decoded = jwtDecode(token);

    if(
        typeof decoded === 'object' &&
        'email' in decoded &&
        'role' in decoded &&
        'iat' in decoded &&
        'exp' in decoded
    ){
        return decoded as TDecodedToken;
    }
    return null;
}catch(error){
console.log('token verification faild',error)
    }
}

export default verifyToken;