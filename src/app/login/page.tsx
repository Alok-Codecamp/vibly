"use client"
import { Field} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useSigninMutation} from '@/redux/features/auth/authApi';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react'
import { useForm } from 'react-hook-form'
import verifyToken from '../utils/verifyToken';
import { setUser } from '@/redux/features/auth/authSlice';
import { usePathname, useRouter } from 'next/navigation';

type TformData = {
email:string;
password:string
}

const Page = () => {

const dispatch = useAppDispatch();
const [signin,{error,isLoading}] = useSigninMutation()
const pathName = usePathname();
const router = useRouter();
console.log('pathname',pathName)

  const {
    register, 
    handleSubmit,
    formState:{errors}
  } = useForm();

  // form data handler 
const onSubmit = async (formData:any) =>{
  try{
    console.log(isLoading);
    const loginResponse = await signin(formData);

    if(loginResponse){
      const token = loginResponse?.data?.token;
      
      const decodedToken = verifyToken(token?.access_token);
      console.log(decodedToken)

      dispatch(setUser({user:decodedToken,token:token?.access_token}))

      router.push(pathName||'/')
    }
  }
  catch(error){
    console.log(error)
  }
}

  return (
    <>
     {/* web view  */}
    <div className='hidden lg:flex justify-start items-start'>
    {/* left section  */}
    <section className='bg-gray-100 mx-24 my-20'>
      saved profiles
      <div className='my-6'>
        <h1>Loged in as </h1>
        <div className='grid grid-cols-3 gap-4'>
          {
          [1,2,3].map(profile=>(
          <div key={profile} className='w-32 h-32 bg-red-300'>{profile}</div>
        ))
          }

        </div>
        {/* login form  */}
        <div className='my-5'>
          <h1>Login with email or phone</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
    <Field data-disabled>
      <Input
      {...register('email',{required:true})}
        id="email"
        type="email"
        placeholder="Email"
      />
    </Field>
    <Field data-disabled>
      <Input className='my-2' {...register('password',{required:true})} name="password" type="text" id='password' placeholder='Password'/>
    </Field>
          
          <Input type='submit' value={'Login'}/>
        </form>
        </div>
      </div>
    </section>
    {/* right section  */}
    <section className='bg-violet-500'>
right section 0
    </section>
    </div>
    {/* mobile view  */}
    <div className='block lg:hidden'>
      mobile view 
    </div>
    </>
  )
}

export default Page