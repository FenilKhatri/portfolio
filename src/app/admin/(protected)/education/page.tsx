"use client";

import EducationForm from "@/components/admin/EducationForm";
import AdminTable from "@/components/admin/AdminTable";
import { educationColumns } from "@/constants/adminTableColumns";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Education } from "@/types/table";
import AdminPageLayout from "@/components/admin/AdminPageLayout";
import useDelete from "@/hooks/useDelete";

const EducationPage = () => {
  const { data: education, loading, error, refetch } = useFetch<Education[]>("/api/admin/education");
  const { handleDelete } = useDelete({ refetch, endPoint: "/api/admin/education", dataName: "Education" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState<Education | null>(null);

  const handleEdit = (education: Education) => {
    setEditingData(education);
    setIsEditing(true);
  };

  const handleClose = () => {
    setEditingData(null);
    setIsEditing(false);
  };

  return (
    <AdminPageLayout
      title="Manage Education"
      isEditing={isEditing}
      setIsEditing={(val) => {
        setIsEditing(val);
        if (!val) setEditingData(null);
      }}
      actionButtonLabel="Add Education"
    >
      {isEditing && (
        <div className="p-6 md:p-10 w-full border-2 border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#111] backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/50 mb-8">
          <EducationForm initialData={editingData} onSuccess={() => { handleClose(); refetch(); }} onCancel={handleClose} />
        </div>
      )}

      {!isEditing && (
        <AdminTable columns={educationColumns} data={education || []} loading={loading} error={error} refetch={refetch} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </AdminPageLayout>
  );
};

export default EducationPage;
