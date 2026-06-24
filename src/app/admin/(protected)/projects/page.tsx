"use client";

import ProjectForm from "@/components/admin/ProjectForm";
import AdminTable from "@/components/admin/AdminTable";
import { projectsColumns } from "@/constants/adminTableColumns";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Project } from "@/types/table";
import AdminPageLayout from "@/components/admin/AdminPageLayout";
import useDelete from "@/hooks/useDelete";

const ProjectsPage = () => {
  const { data: projects, loading, error, refetch } = useFetch<Project[]>("/api/admin/projects");
  const { handleDelete } = useDelete({ refetch, endPoint: "/api/admin/projects", dataName: "Project" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState<Project | null>(null);

  const handleEdit = (project: Project) => {
    setEditingData(project);
    setIsEditing(true);
  };

  const handleClose = () => {
    setEditingData(null);
    setIsEditing(false);
  };

  return (
    <AdminPageLayout
      title="Manage Projects"
      isEditing={isEditing}
      setIsEditing={(val) => {
        setIsEditing(val);
        if (!val) setEditingData(null);
      }}
      actionButtonLabel="Add Project"
    >
      {isEditing && (
        <div className="p-6 md:p-10 w-full border-2 border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#111] backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/50 mb-8">
          <ProjectForm initialData={editingData} onSuccess={() => { handleClose(); refetch(); }} onCancel={handleClose} />
        </div>
      )}

      {!isEditing && (
        <AdminTable columns={projectsColumns} data={projects || []} loading={loading} error={error} refetch={refetch} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </AdminPageLayout>
  );
};

export default ProjectsPage;
