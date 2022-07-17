import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../components/apiFuncs/userApi'
import { setUser } from '../../slices/user'

import { GridForm, ColOne, ColTwo, Button } from '../Styled/Styled'

function Register() {
  const user = useSelector((state) => state)
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [form, setForm] = useState({
    auth0Id: '',
    email: '',
    username: ''
  })

  
  useEffect(() => {
    setForm({
      auth0Id: user.user.auth0Id,
      email: user.user.email,
    })
  }, [user])

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function userDataHandler() {
    setForm({...form, username: username})
  }

  async function handleClick() {
    await addUser(form)
    navigate('/')
  }

  return (
    <>
      <h2 style={{margin: '2em'}}>Register</h2>
      <GridForm>
        {/* <ColOne htmlFor="username">Auth0 Id:</ColOne>
        <ColTwo
          type="text"
          id="auth0Id"
          name="auth0Id"
          value='ENCRYPTED'
          disabled={true}
        /> */}

        <ColOne htmlFor="email">Email:</ColOne>
        <ColTwo
          type="text"
          id="email"
          name="email"
          value={form.email}
          disabled={true}
        />
        
        <ColOne htmlFor="username">Username:</ColOne>
        <ColTwo
          type="text"
          id="username"
          name="username"
          onChange={handleUsername}
          onBlur={userDataHandler}
          placeholder="Create a username"
        />

        <Button style={{margin: '1em', border: '1pt solid black'}} type="button" onClick={handleClick}>
          Go
        </Button>
      </GridForm>
    </>
  )
}

export default Register
