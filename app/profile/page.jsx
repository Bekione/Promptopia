"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [myPrompts, setMyPrompts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPrompts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE"
        })

        const filteredPosts = myPrompts.filter(prompt => prompt._id !== post._id)
        setMyPrompts(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page."
      data={myPrompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
