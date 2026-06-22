"use client";

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Eye, EyeClosed } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from "sonner";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginInput, LoginSchema } from '@/lib/validations/auth';

const Login = () => {

    const [showPass, setShowPass] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginInput>({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = async (data: LoginInput) => {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (result.success) {
            router.refresh();
            router.push("/admin/dashboard");
        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className='h-screen w-full flex items-center justify-center px-5'>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full max-w-xl mx-auto flex flex-col space-y-5 md:space-y-10 items-start p-5 border-black/10 dark:border-white/10 border-2'>
                <h1 className='text-3xl font-bold tracking-tight text-black dark:text-white text-center w-full'>Admin Login</h1>

                <Input
                    {...register("email")}
                    label='email'
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    required
                    className='w-full'
                />
                {errors.email && (
                    <p className='text-red-500 text-sm'>{errors.email.message}</p>
                )}

                <Input
                    {...register("password")}
                    label='password'
                    name='password'
                    type={showPass ? 'text' : 'password'}
                    placeholder='Enter your password'
                    required
                    className='w-full'
                    children={
                        <button type='button' onClick={() => setShowPass((prev) => !prev)} className='cursor-pointer'>
                            {
                                showPass ? <Eye /> : <EyeClosed />
                            }
                        </button>
                    }
                />
                {errors.password && (
                    <p className='text-red-500 text-sm'>{errors.password.message}</p>
                )}

                <Button
                    type='submit'
                    disabled={isSubmitting}
                    variant='primary'
                    className='w-full'
                >
                    {
                        isSubmitting ? "Logging In..." : "Login"
                    }
                </Button>
            </form>

        </div>
    )
}

export default Login;