import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useTask = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {refetch, data : tasks =[]} = useQuery({
        queryKey : ['tasks', user?.email],
        queryFn : async()=>{
           const res = await axiosPublic.get(`/tasks?email=${user.email}`);
        //    console.log(res.data);
           return res.data;
            
        }
    });
    return [tasks , refetch]
};

export default useTask;