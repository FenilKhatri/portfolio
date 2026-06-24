"use client";

import SkillForm from "@/components/admin/SkillForm";
import AdminTable from "@/components/admin/AdminTable";
import { skillsColumns } from "@/constants/adminTableColumns";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Skill } from "@/types/table";
import AdminPageLayout from "@/components/admin/AdminPageLayout";
import useDelete from "@/hooks/useDelete";

const SkillsPage = () => {
  const { data: skills, loading, error, refetch } = useFetch<Skill[]>("/api/admin/skills");
  const { handleDelete } = useDelete({ refetch, endPoint: "/api/admin/skills", dataName: "Skill" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState<Skill | null>(null);

  const handleEdit = (skill: Skill) => {
    setEditingData(skill);
    setIsEditing(true);
  };

  const handleClose = () => {
    setEditingData(null);
    setIsEditing(false);
  };

  return (
    <AdminPageLayout
      title="Manage Skills"
      isEditing={isEditing}
      setIsEditing={(val) => {
        setIsEditing(val);
        if (!val) setEditingData(null);
      }}
      actionButtonLabel="Add Skill"
    >
      {isEditing && (
        <div className="p-6 md:p-10 w-full border-2 border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#111] backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/50 mb-8">
          <SkillForm initialData={editingData} onSuccess={() => { handleClose(); refetch(); }} onCancel={handleClose} />
        </div>
      )}

      {!isEditing && (
        <AdminTable columns={skillsColumns} data={skills || []} loading={loading} error={error} refetch={refetch} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </AdminPageLayout>
  );
};

export default SkillsPage;
