import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
});

export const EmailCapture = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("You are in. The first letter arrives when it is ready.");
      setName("");
      setEmail("");
      setLoading(false);
    }, 400);
  };

  return (
    <section
      id="subscribe"
      className="relative py-28 md:py-40 px-6 md:px-12 border-t border-border"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-display text-cream text-4xl md:text-6xl reveal">
          Enter your name
          <br />
          and email.
        </h2>
        <p className="serif text-xl md:text-2xl text-cream/85 mt-8 reveal">
          I will send you something <span className="italic text-gold">worth reading.</span>
        </p>

        <form onSubmit={onSubmit} className="mt-12 md:mt-16 space-y-4 reveal">
          <input
            type="text"
            required
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-ink-elevated border border-border px-6 py-5 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
          />
          <input
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full bg-ink-elevated border border-border px-6 py-5 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full eyebrow bg-gold text-ink px-8 py-6 hover:bg-cream transition-colors disabled:opacity-60"
          >
            {loading ? "..." : "I am ready."}
          </button>
        </form>

        <p className="text-cream/60 text-sm mt-8 text-center reveal leading-relaxed">
          No noise. No spam. One message at a time.
          <br />
          When I have something worth saying, you will hear from me.
        </p>
      </div>
    </section>
  );
};
