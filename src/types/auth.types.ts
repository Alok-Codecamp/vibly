


export type TDecodedToken={
    email:string;
    role:'admin'|'user'|'guest';
    iat:number;
    exp:number;
}