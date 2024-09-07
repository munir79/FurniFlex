import axios from "axios";



const AxiosSecure = axios.create({
    baseURL: 'https://furniflex-server-rust.vercel.app/',
    
  });
const UseAxiosSecure = () => {
    return AxiosSecure;
};

export default UseAxiosSecure;