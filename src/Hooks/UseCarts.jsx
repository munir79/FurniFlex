import { useContext } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseCarts = () => {
    const AxiosSecure=UseAxiosSecure();
    const {user}=useContext(AuthContext);
    const {data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn: async ()=>{
         const res= await AxiosSecure.get(`/carts?email=${user.email}`);
         return res.data;
        }
    })
    return [cart];
};

export default UseCarts;