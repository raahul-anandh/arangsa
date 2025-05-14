// src/app/form/[formId]/page.tsx
import { notFound } from "next/navigation";
import PerspectiveCard from "@/components/PerspectiveCard";
import NewOpinionForm from "@/components/NewOpinionForm";

type perspective = {
  perspectiveId: string;
  perspectiveDescription: string;
  votes: number;
};

async function fetchPerspectives(formId: string): Promise<perspective[]> {
  const res = await fetch(`${process.env.API_URL}/api/form/${formId}/perspectives`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  return res.json();
}

export default async function FormPage({ params }: { params: { formId: string } }) {
  const formId = params.formId;
  const perspectives = await fetchPerspectives(formId);

  if (!perspectives.length) return notFound();

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Community Perspectives</h1>
      <div className="space-y-4">
        {perspectives.map((p) => (
          <PerspectiveCard key={p.perspectiveId} perspective={p} formId={formId} />
        ))}
      </div>
      <NewOpinionForm formId={formId} />
    </main>
  );
}
