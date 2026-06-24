"use client";

import ExperienceForm from "@/components/admin/ExperienceForm";
import AdminTable from "@/components/admin/AdminTable";
import { experienceColumns } from "@/constants/adminTableColumns";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Experience } from "@/types/table";
import AdminPageLayout from "@/components/admin/AdminPageLayout";
import useDelete from "@/hooks/useDelete";

const ExperiencePage = () => {
  const { data: experience, loading, error, refetch } = useFetch<Experience[]>("/api/admin/experience");
  const { handleDelete } = useDelete({ refetch, endPoint: "/api/admin/experience", dataName: "Experience" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState<Experience | null>(null);

  const handleEdit = (experience: Experience) => {
    setEditingData(experience);
    setIsEditing(true);
  };

  const handleClose = () => {
    setEditingData(null);
    setIsEditing(false);
  };

  return (
    <AdminPageLayout
      title="Manage Experience"
      isEditing={isEditing}
      setIsEditing={(val) => {
        setIsEditing(val);
        if (!val) setEditingData(null);
      }}
      actionButtonLabel="Add Experience"
    >
      {isEditing && (
        <div className="p-6 md:p-10 w-full border-2 border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#111] backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/50 mb-8">
          <ExperienceForm initialData={editingData} onSuccess={() => { handleClose(); refetch(); }} onCancel={handleClose} />
        </div>
      )}

      {!isEditing && (
        <AdminTable columns={experienceColumns} data={experience || []} loading={loading} error={error} refetch={refetch} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </AdminPageLayout>
  );
};

export default ExperiencePage;
