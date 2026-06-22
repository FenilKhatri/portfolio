import Button from '../ui/Button'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'

const ProfileForm = () => {
    return (
        <>
            <form className="flex flex-col space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <Input label="Name" name="name" placeholder="Enter your full name" required />
                    <Input label="Tagline" name="tagline" placeholder="Enter your tagline" required />
                    <Input label="Headline" name="headline" placeholder="E.g. Full Stack Developer" required />
                </div>

                <TextArea label="About" name="about" placeholder="Write about yourself..." required />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10">
                    <Input
                        label="Profile Image"
                        name="profileImage"
                        type="file"
                        accept="image/*"
                        className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-emerald-500/10 dark:file:text-emerald-500 cursor-pointer"
                    />

                    <Input
                        label="Resume (PDF)"
                        name="resume"
                        type="file"
                        accept=".pdf"
                        className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-emerald-500/10 dark:file:text-emerald-500 cursor-pointer"
                    />
                </div>

                <div className="pt-4 flex justify-end">
                    <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">Save Profile</Button>
                </div>
            </form>
        </>
    )
}

export default ProfileForm