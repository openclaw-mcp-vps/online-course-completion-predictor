export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Students Will Drop Out
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze engagement patterns, quiz scores, and login frequency to identify at-risk students before they disappear — then trigger automated intervention campaigns.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📊", title: "Dropout Risk Scores", desc: "ML-powered logistic regression scores every student 0–100% risk." },
            { icon: "📥", title: "CSV or API Ingestion", desc: "Upload a CSV or connect your LMS API to sync student data instantly." },
            { icon: "📧", title: "Automated Alerts", desc: "Email intervention campaigns fire automatically when risk crosses your threshold." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$11</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited student records",
              "Real-time dropout risk dashboard",
              "CSV upload + API integration",
              "Automated email intervention alerts",
              "Exportable risk reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the dropout prediction work?",
              a: "We use a logistic regression model trained on engagement metrics — login frequency, quiz scores, video watch time, and assignment completion rates — to calculate a dropout probability score for each student."
            },
            {
              q: "What data do I need to get started?",
              a: "A CSV with student IDs, login dates, quiz scores, and assignment completion is enough. You can also connect via API to sync data automatically from your LMS."
            },
            {
              q: "How are intervention emails triggered?",
              a: "You set a risk threshold (e.g., 70%). When a student's score crosses it, an automated email campaign fires to the student and/or their instructor."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Course Completion Predictor. All rights reserved.
      </footer>
    </main>
  );
}
