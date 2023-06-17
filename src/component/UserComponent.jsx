import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUserData } from "../query/UserQuery";
import { setUser } from "../redux/UserSlice";

export const UserComponent = () => {
  const res = useFetchUserData();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);
  console.log("user......",users);
  useEffect(() => {
    console.log(res.isLoading);
    console.log(res.data);
    console.log(res.data?.data?.data);
    dispatch(setUser(res.data?.data?.data));
  }, [res.isLoading]);

  return (
    <div>
      <h1>Users</h1>
      {users?.map((user) => {
        return (
          <div>
            <h1>{user._id}</h1>
          </div>
        );
      })}
    </div>
  );
};
