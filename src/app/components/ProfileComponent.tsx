"use client";

import React, { useEffect, useState } from 'react';
import type { ProfileData } from '../utils/fakeApi';
import { fetchProfileData } from '../utils/fakeApi';

export default function ProfileComponent(){
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadProfile() {
      const data = await fetchProfileData();
      setProfile(data);
      setLoading(false);
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return <div>Error loading profile</div>;
  }

  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10">
          <img
            alt="Profile image"
            className="rounded-full w-full h-full object-fill"
            src={profile.imageUrl}
          />
        </div>
        <div className="flex-1 space-y-6 py-1">
          <div className="rounded font-bold">Profile Information</div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="rounded text-slate-700">{profile.role}</div>
              <div className="text-slate-700">&#x2022;</div>
              <div className="rounded text-slate-700">{profile.years}</div>
            </div>
            <div className="rounded text-slate-700">{profile.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
