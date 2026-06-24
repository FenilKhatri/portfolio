import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from "../ui/Button";
import Input from "../ui/Input";
import { EducationFormData, FormProps } from '@/types/forms';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const EducationForm = ({ initialData, onSuccess, onCancel }: FormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EducationFormData>();
  const { submit, loading } = useFormSubmit<EducationFormData>({
    url: "/api/admin/education",
    successMessage: initialData && Object.keys(initialData).length > 0 ? "Education updated successfully!" : "Education added successfully!",
    method: initialData && Object.keys(initialData).length > 0 ? "PUT" : "POST"
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const handleForm = async (data: EducationFormData) => {
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
          <Input label="College / University" placeholder="E.g. XYZ University" {...register("university", { required: "University is required" })} error={errors.university?.message} />
          <Input label="Degree" placeholder="E.g. Bachelor of Technology" {...register("degree", { required: "Degree is required" })} error={errors.degree?.message} />
          <Input label="Field of Study (Optional for School)" placeholder="E.g. Computer Science and Engineering" {...register("fieldOfStudy")} error={errors.fieldOfStudy?.message} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Input label="Start Date" type="date" className="text-black/90 dark:text-white/90" {...register("startDate", { required: "Start date is required" })} error={errors.startDate?.message} />
          <Input label="End Date" type="date" className="text-black/90 dark:text-white/90" {...register("endDate", { required: "End date is required" })} error={errors.endDate?.message} />
          <Input label="CGPA / Percentage" placeholder="E.g. 8.5 or 85" {...register("cgpa", { required: "CGPA / Percentage is required" })} error={errors.cgpa?.message} />
        </div>

        <div className="pt-4 flex items-center justify-end gap-3">
          {onCancel && (
            <Button type="button" variant="danger" onClick={onCancel} className="w-full md:w-auto px-8 py-4">
              Cancel
            </Button>
          )}
          <Button type="submit" variant="primary" disabled={loading} className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">
            {loading ? "Saving..." : "Save Education"}
          </Button>
        </div>
      </form>
    </>
  )
}

export default EducationForm