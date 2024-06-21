import { useMutation } from '@tanstack/react-query'
import React from 'react'
import axiosClient from '../utils/axiosClient'

const useRegistro = () => {
    return useMutation(
        async ({ username, email1, password1 }) => {

            const response = await axiosClient.post('/usuario/registrar-usuario', {
                usuario: username,
                email: email1,
                password: password1
            })
            return response.data
        }
    )
}

export default useRegistro