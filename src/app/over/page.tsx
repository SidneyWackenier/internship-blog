import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Skills / technologies to display as badges
const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "SQL",
  "Git",
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-16">
      {/* Hero / Intro */}
      <section className="py-12 flex flex-col sm:flex-row gap-10 items-start">
        {/*
          PHOTO: Replace this placeholder with your own photo.
          1. Add your photo to /public/photo.jpg
          2. Replace the div below with:
             <Image src="/photo.jpg" alt="Sidney Wackenier" width={160} height={160} className="rounded-full object-cover w-40 h-40 flex-shrink-0" />
             (and add: import Image from "next/image"; at the top)
        */}
        <div className="w-40 h-40 flex-shrink-0 rounded-full bg-muted flex items-center justify-center text-3xl font-bold text-muted-foreground select-none">
          SW
        </div>

        <div>
          <h1 className="text-5xl font-bold tracking-tight mb-3">
            Sidney Wackenier
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Applied Informatics student at AP University of Applied Sciences, currently on
            a developer internship.
          </p>
          <div className="flex flex-wrap gap-3">
            {/* Replace href with your real LinkedIn URL */}
            <Button asChild>
              <a
                href="https://www.linkedin.com/in/sidney-wackenier"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/SidneyWackenier"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Mini CV */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            {/* Replace with your own bio */}
            I&apos;m a senior Computer Science student at AP University of Applied
            Sciences. Currently internint at Jstack, where i'm learning to integrate AI
            as a tool to integrate into my workflow.
          </p>
          <p>
            Outside of my studies, I spend my time gaming, and i am very much into film, soundtracks
            and anything in between.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      {/* Internship info */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">The Internship</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <span className="font-medium text-foreground">Company:</span>{" "}
            Jstack
          </p>
          <p>
            <span className="font-medium text-foreground">Location:</span>{" "}
            {/* Replace with city/address */}
            Kontich, Belgium
          </p>
          <p>
            <span className="font-medium text-foreground">Role:</span>{" "}
            {/* e.g. "Full-stack developer" */}
            Full Stack Developer
          </p>
          <p>
            {/* Describe what you do at the company — a few sentences */}
            As a full stack intern, i'm currently working on expanding the Reacher platform,
            a software solution for a client-outreach company, allowing them to easily manage their clients and prospects.
          </p>
        </div>
      </section>
    </main>
  );
}
