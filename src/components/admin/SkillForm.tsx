import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { FormProps, SkillFormData } from '@/types/forms';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const SkillForm = ({ initialData, onSuccess, onCancel }: FormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SkillFormData>();
  const { submit, loading } = useFormSubmit<SkillFormData>({
    url: "/api/admin/skills",
    successMessage: initialData && Object.keys(initialData).length > 0 ? "Skill updated successfully!" : "Skill added successfully!",
    method: initialData && Object.keys(initialData).length > 0 ? "PUT" : "POST"
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const handleForm = async (data: SkillFormData) => {
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
          <Input
            label="Category"
            placeholder="E.g. Frontend, Backend, Tools"
            {...register("category", { required: "Category is required" })}
            error={errors.category?.message}
          />
          <Input
            label="Skill Name"
            placeholder="E.g. ReactJS"
            {...register("skillName", { required: "Skill name is required" })}
            error={errors.skillName?.message}
          />
        </div>

        <div className="pt-4 flex items-center justify-end gap-3">
          {onCancel && (
            <Button type="button" variant="danger" onClick={onCancel} className="w-full md:w-auto px-8 py-4">
              Cancel
            </Button>
          )}
          <Button type="submit" variant="primary" disabled={loading} className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">
            {loading ? "Saving..." : "Save Skill"}
          </Button>
        </div>
      </form>
    </>
  )
}

export default SkillForm