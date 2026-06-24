import { useForm } from 'react-hook-form'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import Button from '../ui/Button'
import useTheme from '@/hooks/useTheme'
import { ContactFormData } from '@/types/forms'
import { useFormSubmit } from '@/hooks/useFormSubmit'

const ContactForm = () => {
  const { theme } = useTheme();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { submit, loading } = useFormSubmit<ContactFormData>({
    url: "/api/contact",
    successMessage: "Message sent successfully!"
  });

  const handleForm = async (data: ContactFormData) => {
    const isSuccess = await submit(data);
    if (isSuccess) reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="p-5 sm:p-6 md:p-8 space-y-6 border border-black/10 dark:border-white/10 bg-slate-100/80 dark:bg-black/50 backdrop-blur-md shadow-xl"
    >
      <Input
        label="Name"
        placeholder="Enter your name"
        {...register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" }
        })}
        error={errors.email?.message}
      />

      <TextArea
        label="Message"
        placeholder="Enter your message"
        {...register("message", { required: "Message is required" })}
        error={errors.message?.message}
      />

      <Button type="submit" disabled={loading} variant={theme === 'dark' ? 'primary' : 'secondary'} className="w-full" children={loading ? "Sending..." : "Send Message"} />
    </form>
  )
}

export default ContactForm