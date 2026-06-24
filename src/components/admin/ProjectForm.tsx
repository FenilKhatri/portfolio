import { projectsStatus } from '@/constants/project'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Select from '../ui/Select'
import TextArea from '../ui/TextArea'
import CheckBox from '../ui/CheckBox'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { FormProps, ProjectFormData } from '@/types/forms'
import { useFormSubmit } from '@/hooks/useFormSubmit'

const ProjectForm = ({ initialData, onSuccess, onCancel }: FormProps) => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProjectFormData>();

  const { submit, loading, setLoading } = useFormSubmit<any>({
    url: "/api/admin/projects",
    successMessage: initialData && Object.keys(initialData).length > 0 ? "Project updated successfully!" : "Project added successfully!",
    method: initialData && Object.keys(initialData).length > 0 ? "PUT" : "POST"
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);
  const handleForm = async (data: any) => {
    try {
      setLoading(true);
      let imageUrl = "";

      if (selectedFile) {
        const formData = new FormData();

        formData.append("file", selectedFile);

        const uploadResponse = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadResponse.json();

        imageUrl = uploadData.url;
      }

      const projectPayload = {
        ...data,
        image: imageUrl,
      };

      const isSuccess = await submit(projectPayload);
      if (isSuccess) {
        resetForm();
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    reset();
    setSelectedFile(null);
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)} className="flex flex-col space-y-6 md:space-y-8">
        <Input label="Project Title" placeholder="Enter project title" {...register("title", { required: "Project Title is required" })} error={errors.title?.message} />
        <TextArea label="Description" placeholder="Project description..." {...register("description", { required: "Description is required" })} error={errors.description?.message} />

        <Input label="Tech Stack" placeholder="E.g. React, Next.js, Tailwind (comma separated)" {...register("techStack", { required: "Tech Stack is required" })} error={errors.techStack?.message} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input label="GitHub URL" type="url" placeholder="https://github.com/..." {...register("githubURL")} />
          <Input label="Live URL" type="url" placeholder="https://..." {...register("liveURL")} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10">
          <Input
            label="Project Image"
            type="file"
            accept="image/*"
            className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-emerald-500/10 dark:file:text-emerald-500 cursor-pointer"
            {...register("image", {
              onChange: (e) => setSelectedFile(e.target.files?.[0] || null)
            })}
          />

          <Select
            label="Status"
            options={projectsStatus}
            {...register("projectStatus")}
          />
        </div>

        <div className="flex items-center gap-4 p-4 border border-orange-500/20 dark:border-emerald-500/20 bg-orange-500/5 dark:bg-emerald-500/5">
          <CheckBox label="Mark as Featured Project" id="featured" {...register("featured")} />
        </div>

        <div className="pt-4 flex items-center justify-end gap-3">
          {onCancel && (
            <Button type="button" variant="danger" onClick={onCancel} className="w-full md:w-auto px-8 py-4">
              Cancel
            </Button>
          )}
          <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20" disabled={loading}>{loading ? "Saving..." : "Save Project"}</Button>
          <Button type="reset" variant="danger" onClick={resetForm} className="w-full md:w-auto px-12 py-4 shadow-lg shadow-red-500/20" disabled={loading}>{loading ? "Resetting..." : "Reset"}</Button>
        </div>
      </form>
    </>
  )
}

export default ProjectForm;