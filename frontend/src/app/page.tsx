// src/app/page.tsx
export default function Home() {
  return (
    <main>
      <section className = "bg-paige py-16 px-20 text-left">
        <h1 className = "iconsolata-medium mb-8 text-3xl text-center">You're collecting feedback</h1>
        <h1 className = "iconsolata-semibold mb-8 text-4xl text-center tracking-light"> But are you really hearing what matters?</h1>
        <p className="iconsolata-normal mb-8 max-w-2xl mx-auto text-center text-lg ">Our platform helps you go beyond collecting responses.
          It distills raw opinions into clear, actionable perspectives—so you can listen at scale, spot emerging themes, and align faster. 
          Whether it’s from employees or customers, make every voice count.</p>
        <div className="flex justify-center gap-8">
          <a href="/form/[formId]" className="btn-primary bg-wine text-white p-4 rounded-3xl">
            Create Form
          </a>
          <button className="btn-secondary bg-wine text-white p-4 rounded-3xl">
            How Arangsa works
          </button>
        </div>
      </section>

      <section className = "bg-wine px-60">
        <h1 className = "iconsolata-medium text-3xl py-8 text-center text-white">How Arangsa works?</h1>
        <p className = "iconsolata-normal text-xl pb-8 text-center text-white">Arangsa makes it easy to gather meaningful insights from open-ended feedback. 
          Instead of limiting people to predefined options, Arangsa lets them freely share their thoughts. Behind the scenes, AI groups 
          similar opinions into clear, distinct perspectives. This way, others can explore existing viewpoints, vote on the ones they 
          resonate with, or contribute new ones—making feedback richer, more inclusive, and easier to act on. </p>
      </section>
      
    </main>
  );
}