"use client";

import AdminTable from "@/components/admin/AdminTable";
import { contactsColumns } from "@/constants/adminTableColumns";
import { useFetch } from "@/hooks/useFetch";
import { Contact } from "@/types/table";
import AdminPageLayout from "@/components/admin/AdminPageLayout";

const ContactsPage = () => {
  const { data: contacts, loading, error, refetch } = useFetch<Contact[]>("/api/admin/contacts");

  return (
    <AdminPageLayout title="Contacts">
      <AdminTable columns={contactsColumns} data={contacts || []} loading={loading} error={error} refetch={refetch} />
    </AdminPageLayout>
  );
};

export default ContactsPage;