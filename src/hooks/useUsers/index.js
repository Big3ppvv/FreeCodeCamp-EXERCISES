import { useState, useEffect } from 'react'

const useUsers = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const response = await fetch('users.json');
      const data = await response.json();
      setTimeout(() => {
        setUsers(data);
        setIsLoading(false)
      },3000);
      
      
    }

    getData()
  }, [])
  return { users, isLoading }
}

export default useUsers