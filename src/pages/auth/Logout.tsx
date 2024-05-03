import { Button } from '@mui/material'
import React from 'react'
import { useAppDispatch } from '../../hooks'
import { LogoutUser } from '../../redux/Products/Auth/AuthSlice'

type Props = {}

const Logout = (props: Props) => {
  const dispatch = useAppDispatch()
  return (
    <Button onClick={() => dispatch(LogoutUser())} >Cerrar sesion</Button>
  )
}

export default Logout