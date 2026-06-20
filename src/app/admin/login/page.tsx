import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const Login = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center px-5'>

            <form className='w-full max-w-xl mx-auto flex flex-col space-y-5 md:space-y-10 items-start p-5 border-black/10 dark:border-white/10 border-2'>
                <h1 className='text-3xl font-bold tracking-tight text-black dark:text-white text-center w-full'>Admin Login</h1>

                <Input 
                    label='email'
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    required
                    className='w-full'
                />

                <Input
                    label='password'
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                    required
                    className='w-full'
                />

                <Button
                    type='submit'
                    variant='primary'
                    className='w-full'
                >
                    Login
                </Button>
            </form>

        </div>
    )
}

export default Login;