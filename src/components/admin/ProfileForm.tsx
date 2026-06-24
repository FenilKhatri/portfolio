import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import { FormProps, ProfileFormData } from '@/types/forms';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const ProfileForm = ({ initialData, onSuccess, onCancel }: FormProps) => {
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: initialData || {}
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);
  const { submit, loading, setLoading } = useFormSubmit<any>({
    url: "/api/admin/profile",
    successMessage: initialData && Object.keys(initialData).length > 0 ? "Profile updated successfully!" : "Profile created successfully!",
    method: initialData && Object.keys(initialData).length > 0 ? "PUT" : "POST"
  });

  const handleForm = async (data: ProfileFormData) => {
    try {
      setLoading(true);
      let profileImageUrl = "";
      let resumeUrl = "";

      if (profileFile) {
        const formData = new FormData();
        formData.append("file", profileFile);
        const uploadRes = await fetch("/api/admin/upload", { method: "POST", body: formData });
        const uploadData = await uploadRes.json();
        profileImageUrl = uploadData.url;
      }

      if (resumeFile) {
        const formData = new FormData();
        formData.append("file", resumeFile);
        const uploadRes = await fetch("/api/admin/upload", { method: "POST", body: formData });
        const uploadData = await uploadRes.json();
        resumeUrl = uploadData.url;
      }

      const payload = {
        ...data,
        profileImage: profileImageUrl,
        resume: resumeUrl
      };

      const isSuccess = await submit(payload);
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
    setProfileFile(null);
    setResumeFile(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)} className="flex flex-col space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Input label="Name" placeholder="Enter your full name" {...register("name", { required: "Name is required" })} error={errors.name?.message} />
          <Input label="Tagline" placeholder="Enter your tagline" {...register("tagline", { required: "Tagline is required" })} error={errors.tagline?.message} />
          <Input label="Headline" placeholder="E.g. Full Stack Developer" {...register("headline", { required: "Headline is required" })} error={errors.headline?.message} />
        </div>

        <TextArea label="About" placeholder="Write about yourself..." {...register("about", { required: "About is required" })} error={errors.about?.message} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10">
          <Input
            label="Profile Image"
            type="file"
            accept="image/*"
            className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-emerald-500/10 dark:file:text-emerald-500 cursor-pointer"
            {...register("profileImage", {
              onChange: (e) => setProfileFile(e.target.files?.[0] || null)
            })}
          />

          <Input
            label="Resume (PDF)"
            type="file"
            accept=".pdf"
            className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-emerald-500/10 dark:file:text-emerald-500 cursor-pointer"
            {...register("resume", {
              onChange: (e) => setResumeFile(e.target.files?.[0] || null)
            })}
          />
        </div>

        <div className="pt-4 flex justify-end gap-4">
          {onCancel && (
            <Button type="button" variant="danger" onClick={onCancel} className="w-full md:w-auto px-8 py-4">
              Cancel
            </Button>
          )}
          <Button type="submit" variant="primary" disabled={loading} className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">{loading ? "Saving..." : "Save Profile"}</Button>
        </div>
      </form>
    </>
  )
}

export default ProfileForm