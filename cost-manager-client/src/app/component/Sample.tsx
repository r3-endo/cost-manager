import React from 'react'
import { useUser } from '../hooks/useLoginUser';

function Sample() {
  const { loading, user, error } = useUser();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    return (
      <div>
        <div>{user.name}</div>
        <div>{user.password}</div>
      </div>
    );
  }
  return (
    <>
    </>
  )
}

export default Sample