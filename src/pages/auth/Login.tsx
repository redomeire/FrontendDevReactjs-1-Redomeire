import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { MdKey, MdOutlineEmail } from "react-icons/md";
import Input from "../../components/input";
import AuthLayout from "../../components/partials/layout/AuthLayout";
import Typography from "../../components/Typography";
import Button from "../../components/button";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../feature/authentication/services/login";
import { AxiosError } from "axios";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const { error, mutate } = useMutation({
        mutationFn: login,
        onSuccess: ({ data }) => {
            localStorage.setItem("token", data.token)
            setTimeout(() => {
                window.location.pathname = "/"
            }, 1000);
        },
        onError: (err: AxiosError<{ error: string }>) => {
            console.log(err.response?.data.error)
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate(credentials)
    }

    return (
        <AuthLayout>
            <section className="lg:w-2/6 w-5/6">
                <div className="mb-5">
                    <Typography variant="subheading">Login</Typography>
                    <Typography variant="body" className="mt-3">Experience a delightful culinary journey like never before</Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="font-medium text-sm mb-2 block">Email*</label>
                    <Input
                        beginningIcon={<MdOutlineEmail />}
                        type="email"
                        required
                        placeholder="Enter your email"
                        onChange={(e) => {
                            setCredentials(prev => {
                                return { ...prev, email: e.target.value }
                            })
                        }} />
                    <label htmlFor="email" className="font-medium text-sm mt-5 my-2 block">Password*</label>
                    <Input
                        required
                        beginningIcon={<MdKey />}
                        endIcon={
                            passwordVisible ?
                                <AiOutlineEye onClick={() => {
                                    setPasswordVisible(prev => !prev)
                                }} className="cursor-pointer" size={20} />
                                :
                                <AiOutlineEyeInvisible onClick={() => {
                                    setPasswordVisible(prev => !prev)
                                }} className="cursor-pointer" size={20} />
                        }
                        onChange={(e) => {
                            setCredentials(prev => {
                                return { ...prev, password: e.target.value }
                            })
                        }}
                        placeholder="Enter your password"
                        type={passwordVisible ? 'text' : 'password'} />
                    {
                        error &&
                        <Typography className="text-red-500 mt-5">
                            {error?.response?.data.error}
                        </Typography>
                    }
                    <Button className="w-full mt-10 flex justify-center">Sign In</Button>
                </form>
                <Typography className="mt-5" variant="caption">Don't have account yet? <a href="/register" className="font-semibold">Register</a></Typography>
            </section>
        </AuthLayout>
    );
}

export default Login;
