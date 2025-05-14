// src/components/NewOpinionForm.tsx
"use client";

import { useState } from "react";

export default function NewOpinionForm({ formId }: { formId: string }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    await fetch(`/api/form/${formId}/submit`, {
      method: "POST",
      body: JSON.stringify({ opinion: text }),
    });

    setText("");
    // Optional: trigger refresh
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <textarea
        className="w-full p-3 border rounded resize-none"
        placeholder="Your opinion..."
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Submit Opinion
      </button>
    </form>
  );
}
