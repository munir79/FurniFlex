
import { Link } from 'react-router-dom';
import logo1 from '../assets/Logo/FurniFlex.png'
const SignUp = () => {
    return (
       <div className=' bg-[ #F5F5F5] w-[600px] h-[619px] border-solid rounded-sm border-1 mx-auto'>
         <div>
           <p className='text-2xl font-semibold text-center'>Welcome To</p>
           <h3 className='text-4xl mt-3 text-center font-bold'>Furni<span className='text-[#1E99F5]'>Flex</span></h3>
           <p className='font-medium mt-2 text-center text-xl text-[#707070]'>Signup for purchase your desire products</p>
           
 <form >

 <div className='flex mt-5 items-center justify-center flex-col md:flex-row gap-2'>


<label className="input input-bordered flex flex-col ">
FirstName(optional)<input type="text" className="grow  w-[259px] h-[52px]" placeholder="Jordan" />
</label>
<label className="input  input-bordered flex flex-col  ">
LastName(optional)<input type="text" className="grow w-[259px] h-[52px]" placeholder="Ken" />
</label>
</div>


<label className="input mt-5 input-bordered flex flex-col  ">
  Email
  <input type="text" className="grow" placeholder="jordan@email.com" />
</label>
<label className="input mt-5 input-bordered flex flex-col  ">
Password
  <input type="password" className="grow" placeholder=" " />
</label>


<div className=" mt-5">
  <label className="cursor-pointer  ">
    
    <input type="checkbox" defaultChecked className="checkbox  checkbox-info" />
    <span className="  text-[14px] font-medium text-[#000000]">I agree to the Terms & Policy</span>
  </label>
</div>
<button type='submit'  className="btn mt-5 w-full btn-active btn-neutral">SignUp</button>
 </form>

 <div className="flex items-center justify-center my-4">
  <div className="border-t border-gray-300 flex-grow"></div>
  <span className="mx-4 text-gray-500">or</span>
  <div className="border-t border-gray-300 flex-grow"></div>
</div>
           





        </div>

        <div className='flex'>
        <button type='submit'  className="btn mt-5 w-1/2 gap-2 btn-active btn-neutral">SignUp</button><button type='submit'  className="btn mt-5 w-1/2 btn-active btn-neutral">SignUp</button>
        </div>
        <p className='text-center font-medium'>Have an account ?<a href=""><Link className='text-blue-500' to='/login'>sign in</Link> </a> </p>
       </div>
    );
};

export default SignUp;