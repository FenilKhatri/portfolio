import Button from '../ui/Button'
import Input from '../ui/Input'

const SkillForm = () => {
  return (
    <>
      <form className="flex flex-col space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input label="Category" name="category" placeholder="E.g. Frontend, Backend, Tools" required />
          <Input label="Skill Name" name="name" placeholder="E.g. ReactJS" required />
        </div>

        <div className="pt-4 flex justify-end">
          <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">Save Skill</Button>
        </div>
      </form>
    </>
  )
}

export default SkillForm