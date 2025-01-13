import React from "react";
import { Link, Route, Routes, useParams, Navigate } from "react-router-dom";

const tabs = [
  { id: "overview", label: "Overview", content: "This is the Overview page." },
  { id: "orders", label: "Orders", content: "This is the Orders page." },
  { id: "settings", label: "Settings", content: "This is the Settings page." }
];

const Profile = () => {
  const { tab } = useParams();
  const activeTab = tabs.find(t => t.id === tab);

  if (!activeTab) return <Navigate to="/profile/overview" replace />;

  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        {tabs.map(({ id, label }) => (
          <Link key={id} to={`/profile/${id}`} style={{ marginRight: "15px" }}>
            {label}
          </Link>
        ))}
      </nav>
      <div>
        <h2>{activeTab.label}</h2>
        <p>{activeTab.content}</p>
      </div>
    </div>
  );
};

const ProfilePage = () => (
  <Routes>
    <Route path="/profile/:tab" element={<Profile />} />
    <Route path="/profile" element={<Navigate to="/profile/overview" replace />} />
  </Routes>
);

export default ProfilePage;
