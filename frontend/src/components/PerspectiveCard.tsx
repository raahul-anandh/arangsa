// src/components/PerspectiveCard.tsx
"use client";

type Props = {
  perspective: {
    perspectiveId: string;
    perspectiveDescription: string;
    votes: number;
  };
  formId: string;
};

export default function PerspectiveCard({ perspective, formId }: Props) {
  const handleUpvote = async () => {
    await fetch(`/api/form/${formId}/vote`, {
      method: "POST",
      body: JSON.stringify({ perspectiveId: perspective.perspectiveId }),
    });
    // Optional: trigger re-fetch or update state
  };

  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white">
      <p className="text-gray-800">{perspective.perspectiveDescription}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-blue-600 font-semibold">{perspective.votes} people agree</span>
        <button
          onClick={handleUpvote}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
        >
          Upvote
        </button>
      </div>
    </div>
  );
}
