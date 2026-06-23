import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import Button from '../ui/Button'
import useTheme from '@/hooks/useTheme'

const ContactForm = () => {

    const {theme} = useTheme();

  return (
    <form
              className="p-5 sm:p-6 md:p-8 space-y-6 border border-black/10 dark:border-white/10 bg-slate-100/80 dark:bg-black/50 backdrop-blur-md shadow-xl"
            >
              <Input
                label="Name"
                name="name"
                placeholder="Enter your name"
                required
              />

              <Input
                label="Email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <TextArea
                label="Message"
                name="message"
                placeholder="Enter your message"
                required
              />

              <Button type="submit" variant={theme === 'dark' ? 'primary' : 'secondary'} className="w-full" children="Send Message" />
            </form>
  )
}

export default ContactForm