import Button from '../ui/Button'
import Input from '../ui/Input'
import TextArea from '../ui/TextArea'

const ExperienceForm = () => {
  return (
    <>
      <form className="flex flex-col space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input label="Company Name" name="company" placeholder="E.g. Google" required />
          <Input label="Role" name="role" placeholder="E.g. Software Engineer" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input label="Duration" name="duration" placeholder="E.g. Jan 2023 - Present" required />
          <Input label="Location" name="location" placeholder="E.g. Remote, Surat" required />
        </div>

        <TextArea label="Description" name="description" placeholder="Describe your responsibilities and achievements..." required />

        <div className="pt-4 flex justify-end">
          <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">Save Experience</Button>
        </div>
      </form>
    </>
  )
}

export default ExperienceForm