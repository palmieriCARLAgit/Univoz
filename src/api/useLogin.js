import { useMutation } from '@tanstack/react-query'
import React from 'react'
import axiosClient from '../utils/axiosClient'

const useLogin = () => {
  return useMutation(
    async ({userName,pass})=>{
        
        const response = await axiosClient.post('/usuario/iniciar-sesion',{
            usuarioBody:userName,
            passwordBody: pass
        })
        return response.data
    }
  )
}

export default useLogin