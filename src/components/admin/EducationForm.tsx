import Button from "../ui/Button"
import Input from "../ui/Input"

const EducationForm = () => {
  return (
    <>
    <form className="flex flex-col space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Input label="College / University" name="university" placeholder="E.g. XYZ University" required />
            <Input label="Degree" name="degree" placeholder="E.g. Bachelor of Technology" required />
            <Input label="Field of Study" name="fieldOfStudy" placeholder="E.g. Computer Science and Engineering" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Input label="Start Date" name="startDate" type="date" required className="text-black/90 dark:text-white/90" />
            <Input label="End Date" name="endDate" type="date" required className="text-black/90 dark:text-white/90" />
            <Input label="CGPA / Grade" name="cgpa" placeholder="E.g. 8.5" required />
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">Save Education</Button>
          </div>
        </form>
    </>
  )
}

export default EducationForm