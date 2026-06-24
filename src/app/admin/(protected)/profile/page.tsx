"use client";

import ProfileForm from "@/components/admin/ProfileForm";
import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";
import Button from "@/components/ui/Button";
import AdminPageLayout from "@/components/admin/AdminPageLayout";

const ProfilePage = () => {
  const { data: profile, loading, refetch } = useFetch<any>("/api/admin/profile");
  const [isEditing, setIsEditing] = useState(false);

  if (loading) {
    return <div className="p-8 text-center text-gray-500 font-code">Loading profile...</div>;
  }

  return (
    <AdminPageLayout
      title="Profile Settings"
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      actionButtonLabel={profile ? "Edit Profile" : "Create Profile"}
    >
      
      <div className="p-6 md:p-10 w-full border-2 border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#111] backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/50">
        {!isEditing ? (
          profile ? (
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                {profile.imageURL && (
                  <img 
                    src={profile.imageURL} 
                    alt="Profile" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover border-4 border-orange-500/20 dark:border-emerald-500/20" 
                  />
                )}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">{profile.name}</h2>
                  <p className="text-lg md:text-xl text-orange-600 dark:text-emerald-400 font-medium mt-1">{profile.headline}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Tagline</h3>
                  <p className="text-lg text-black dark:text-white font-medium">{profile.tagline}</p>
                </div>
                {profile.resumeURL && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Resume</h3>
                    <a href={profile.resumeURL} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">View Resume Document</a>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">About</h3>
                <p className="text-black dark:text-white whitespace-pre-wrap leading-relaxed">{profile.about}</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 dark:text-gray-400 font-code mb-4 text-lg">No profile data found.</p>
              <Button variant="primary" onClick={() => setIsEditing(true)}>Create Profile</Button>
            </div>
          )
        ) : (
          <ProfileForm 
            initialData={profile} 
            onSuccess={() => { setIsEditing(false); refetch(); }} 
            onCancel={() => setIsEditing(false)} 
          />
        )}
      </div>
    </AdminPageLayout>
  );
};

export default ProfilePage;
