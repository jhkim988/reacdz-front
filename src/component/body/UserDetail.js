import { useEffect } from "react";

const UserDetail = ({
  loginModel: { userDetail },
  loginController: { getUserDetail },
}) => {
  useEffect(getUserDetail, []);
  return (
    <>
      {userDetail == null ? (
        <p>로딩중</p>
      ) : (
        <>
          <p>{userDetail.userId}</p>
          <p>{userDetail.userName}</p>
          <p>{userDetail.password}</p>
        </>
      )}
    </>
  );
};

export default UserDetail;
