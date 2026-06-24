import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import { ExperienceFormData, FormProps } from '@/types/forms';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const ExperienceForm = ({ initialData, onSuccess, onCancel }: FormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ExperienceFormData>();
  const { submit, loading } = useFormSubmit<ExperienceFormData>({
    url: "/api/admin/experience",
    successMessage: initialData && Object.keys(initialData).length > 0 ? "Experience updated successfully!" : "Experience added successfully!",
    method: initialData && Object.keys(initialData).length > 0 ? "PUT" : "POST"
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const handleForm = async (data: ExperienceFormData) => {
    const isSuccess = await submit(data);
    if (isSuccess) {
      reset();
      if (onSuccess) onSuccess();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)} className="flex flex-col space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input label="Company Name" placeholder="E.g. Google" {...register("company", { required: "Company is required" })} error={errors.company?.message} />
          <Input label="Role" placeholder="E.g. Software Engineer" {...register("role", { required: "Role is required" })} error={errors.role?.message} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input label="Duration" placeholder="E.g. Jan 2023 - Present" {...register("duration", { required: "Duration is required" })} error={errors.duration?.message} />
          <Input label="Location" placeholder="E.g. Remote, Surat" {...register("location", { required: "Location is required" })} error={errors.location?.message} />
        </div>

        <TextArea label="Description" placeholder="Describe your responsibilities and achievements..." {...register("description", { required: "Description is required" })} error={errors.description?.message} />

        <div className="pt-4 flex items-center justify-end gap-3">
          {onCancel && (
            <Button type="button" variant="danger" onClick={onCancel} className="w-full md:w-auto px-8 py-4">
              Cancel
            </Button>
          )}
          <Button type="submit" variant="primary" disabled={loading} className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">
            {loading ? "Saving..." : "Save Experience"}
          </Button>
        </div>
      </form>
    </>
  )
}

export default ExperienceForm