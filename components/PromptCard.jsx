"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState(false);

  const handleProfileClick = () => {
    if(post.creator._id === session?.user.id) return router.push("/profile")

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`)
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(post.prompt);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex flex-between items-start gap-5">
        <div 
        className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
        onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt="User"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopyToClipboard}>
          <Image
            src={`/assets/icons/${copied ? "tick.svg" : "copy.svg"}`}
            alt="Copy"
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm tex-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="flex-center gap-5 mt-5 pt-3 border-t border-gray-100">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
