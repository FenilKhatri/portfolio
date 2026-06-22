import { projectsStatus } from '@/constants/project'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Select from '../ui/Select'
import TextArea from '../ui/TextArea'
import CheckBox from '../ui/CheckBox'

const ProjectForm = () => {
  return (
    <>
      <form className="flex flex-col space-y-6 md:space-y-8">
        <Input label="Project Title" name="title" placeholder="Enter project title" required />
        <TextArea label="Description" name="description" placeholder="Project description..." required />

        <Input label="Tech Stack" name="techStack" placeholder="E.g. React, Next.js, Tailwind (comma separated)" required />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input label="GitHub URL" name="githubUrl" type="url" placeholder="https://github.com/..." />
          <Input label="Live URL" name="liveUrl" type="url" placeholder="https://..." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10">
          <Input
            label="Project Image"
            name="image"
            type="file"
            accept="image/*"
            className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-emerald-500/10 dark:file:text-emerald-500 cursor-pointer"
          />

          <Select
            label="Status"
            name="status"
            options={projectsStatus} />
        </div>

        <div className="flex items-center gap-4 p-4 border border-orange-500/20 dark:border-emerald-500/20 bg-orange-500/5 dark:bg-emerald-500/5">
          <CheckBox label="Mark as Featured Project" name="featured" id="featured" />
        </div>

        <div className="pt-4 flex justify-end">
          <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">Save Project</Button>
        </div>
      </form>
    </>
  )
}

export default ProjectForm