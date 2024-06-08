import React from 'react'
import useLogout from "../../hooks/useLogout";

const Logout = () => {
    const { logout, loading } = useLogout();
  return (
    <>
    {!loading ? (
        <button
        onClick={logout}
        >Logout</button>
    ) : (
        <span className='loading loading-spinner'></span>
    )}
    </>
  )
}

export default Logout
