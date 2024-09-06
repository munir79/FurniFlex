import { useContext } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseCarts = () => {
    const AxiosSecure=UseAxiosSecure();
    const {user}=useContext(AuthContext);
    console.log(user?.email);
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn:async ()=>{
            const res= await AxiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
          }
    })
    return [cart,refetch];
};


export default UseCarts;