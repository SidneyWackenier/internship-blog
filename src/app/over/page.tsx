import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sidney-wackenier",
    label: "LinkedIn",
    icon: LinkedinIcon,
    className: "bg-[#0077B5] hover:bg-[#0069a0] text-white",
  },
  {
    href: "https://github.com/SidneyWackenier",
    label: "GitHub",
    icon: GithubIcon,
    className: "bg-[#24292e] hover:bg-[#1a1e22] text-white",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-16">
      {/* Hero / Intro */}
      <section className="py-12">
        <h1 className="text-5xl font-bold tracking-tight mb-3">
          Sidney Wackenier
        </h1>
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          Graduaatstudent Progarammeren aan AP Hogeschool en stagiair fullstack developer bij Jstack.
        </p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map(({ href, label, icon: Icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${className}`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </section>

      <Separator />

      {/* Over mij */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Over mij</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Ik ben een student Programmeren aan AP Hogeschool. Momenteel loop ik stage bij Jstack,
            waar ik leer om AI te integreren als tool in mijn workflow.
          </p>
          <p>
            Buiten mijn studies ben ik vooral een gamer en ik ben erg geïnteresseerd in film,
            soundtracks en alles daartussenin.
          </p>
        </div>
      </section>

      <Separator />

      {/* De Stage */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">De Stage</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <span className="font-medium text-foreground">Bedrijf:</span>{" "}
            Jstack
          </p>
          <p>
            <span className="font-medium text-foreground">Locatie:</span>{" "}
            Kontich, België
          </p>
          <p>
            <span className="font-medium text-foreground">Rol:</span>{" "}
            Full Stack Developer
          </p>
          <p>
            Als full stack stagiair werk ik momenteel aan het uitbreiden van het Reacher-platform,
            een softwareoplossing voor een client-outreachbedrijf, waarmee ze hun klanten en prospects
            eenvoudig kunnen beheren.
          </p>
        </div>
      </section>
    </main>
  );
}
