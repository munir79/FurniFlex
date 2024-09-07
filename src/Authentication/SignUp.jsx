
import { Link } from 'react-router-dom';

import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
const SignUp = () => {
const {CreateUser}=useContext(AuthContext);
const [errorMessage, setErrorMessage] = useState("");
  const handleRegistration=event=>{
    event.preventDefault();
    const form=event.target;
    const firstName=form.firstname.value;
    const lastName=form.lastname.value;
    const email=form.email.value;
    const password=form.password.value;

    if (password.length < 6) {
      setErrorMessage(" Password must be at least 6 characters.");
      return; // Stop the form submission
    }

    CreateUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SignUp Sucessfully",
        showConfirmButton: false,
        timer: 1500
      });
      form.reset(" ");
      setErrorMessage("");
    })
    .catch(error=>{
      console.log(error);
    })

    console.log(firstName,lastName,email,password);
  }
  return (
    <div className=' bg-[#FAFAFA] w-[600px] h-[719px] border-solid border-1 rounded-lg mx-auto'>
      <div className='mt-10 p-10'>
        <p className='text-2xl  font-semibold text-center'>Welcome To</p>
        <h3 className='text-4xl mt-3 text-center font-bold'>Furni<span className='text-[#1E99F5]'>Flex</span></h3>
        <p className='font-medium mt-2 text-center text-xl text-[#707070]'>Signup for purchase your desire products</p>

        <form onSubmit={handleRegistration} >

          <div className='flex  flex-col md:flex-row mt-5    gap-2'>


            <label className="input m-2 input-bordered flex flex-col ">
              FirstName(optional)<input type="text" name='firstname' className=" w-full md:w-[209px] h-[52px]" placeholder="Jordan" />
            </label>
            <label className="input  m-2 input-bordered flex flex-col  ">
              LastName(optional)<input type="text" name='lastname' className=" w-full md:w-[209px] h-[52px]" placeholder="Ken" />
            </label>
          </div>


          <label className="input m-3 mt-5 input-bordered flex flex-col  ">
            Email
            <input type="text" name='email' className="grow" placeholder="jordan@email.com" />
          </label>
          <label className="input m-3 mt-5 input-bordered flex flex-col  ">
            Password
            <input type="password" name='password' className="grow" placeholder=" " />
          </label>

          {errorMessage && <p className='text-red-500 text-center mt-2'>{errorMessage}</p>}

          <div className=" m-4 gap-1 mt-5">
            <label className="cursor-pointer space-x-2  ">

              <input type="checkbox" defaultChecked className="checkbox mt-1 checkbox-info" />
              <span className="  text-[14px] mt-0 font-medium text-[#000000]">I agree to the <span className='underline'>Terms & Policy</span></span>
            </label>
          </div>
          <button type='submit' className="btn m-3  mt-2 w-[522px] btn-active btn-neutral">SignUp</button>
        </form>

        <div className="flex items-center justify-center my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>






      </div>

      <div className='flex flex-col md:flex-row md:justify-between'>
        <button type='submit' className="btn m-3 mt-5 w-full md:w-[278px] h-[52px] gap-2 btn-active btn-ghost"> <FcGoogle className='w-[20px] h-[23px]' />SignUp with Google</button>
        <button type='submit' className="btn m-3  mt-5 w-full md:w-[278px] h-[52px] btn-active btn-ghost"> <GrApple className='w-[20px] h-[23px]' />SignUp with Apple</button>
      </div>
      <p className='text-center font-medium'>Have an account ?<a href=""><Link className='text-blue-500' to='/login'>sign in</Link> </a> </p>
    </div>
  );
};

export default SignUp;