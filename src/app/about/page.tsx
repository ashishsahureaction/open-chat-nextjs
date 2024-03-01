import bjj from "@/assets/bjj.jpg";
import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Ashish Sahu and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6 text-justify">
      <H1>About Me</H1>
      <section className="space-y-3" >
        <H2>Who am I?</H2>
        <p>
        My name is Ashish Sahu, and I&apos;m a full-stack software developer based in Canada. With over 8 years of experience in 
        web development, I specialize as a highly motivated front-end developer. I&apos;m currently seeking opportunities within 
        established IT companies where I can leverage my skills and expertise to work on cutting-edge technologies and tackle diverse 
        and challenging projects. Throughout my career, I&apos;ve consistently delivered high-quality work and have showcased numerous 
        projects on my {" "}
          <a
            href="https://github.com/ashishsahureaction" target="blank"
            className="text-primary hover:underline"
          >
            GitHub profile
          </a>
          .
        </p>
        <p>
          I&apos;m inherently confident and possess a natural curiosity, constantly refining my skills one design problem at a time. 
          Over time, I&apos;ve cultivated my abilities to create visually engaging content, demonstrating a commitment to continuous improvement

        </p>
        <p> I&apos;m passionate about building cool apps and websites and super Desi when it comes to Cricket and Bollywood. 
          I love to read and travel.</p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, <strong>Angular</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
        <p>
        Throughout my career, I have had the privilege of working on diverse projects and collaborating with
        talented teams across various industries. From conceptualization to execution, 
        I thrive in dynamic environments where innovation meets practical application.
        </p>
        <p>
        I also excel in utilizing Redux, RxJS, Express.js, MongoDB, Firebase, and RESTful APIs to build scalable solutions.
        Experience with WordPress, StoryBook, and AppWritter streamlines content management and development workflows, while tools 
        such as Google Analytics, Jira, Git, Docker, Azure, and AWS bolster project management and deployment processes. 
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://smartdiary.co" target="blank"
              className="text-primary hover:underline"
            >
              SmartDiary.co
            </a>{" "}
            - An AI-powered journaling app
          </li>
          <li>
            <Link
              href="https://books-ai.app" target="blank"
              className="text-primary hover:underline"
            >
              Books-AI.app
            </Link>{" "}
            - An AI book recommendation app
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love doing sports. I lift weights and do
          Whitewater River Rafting and Tubing. I also enjoy reading books and going out
          sometimes. I think having hobbies other than coding is important for
          mental health.
        </p>
        <p >
          I&apos;m also very much into self-improvement, nutrition, and positive
          psychology.
        </p>
        
        <Image
          src={bjj}
          alt="whitewater river rafting group photo"
          className="rounded-md"
        />
      </section>
      <section className="space-y-3">
        <H2>Looking Ahead</H2>
        <p>
        As I embark on the next chapter of my career journey, I&apos;m excited about the prospect of leveraging my skills and experience 
        to make a positive impact. Whether it&apos;s driving digital transformation initiatives, spearheading new projects, or collaborating 
        with like-minded professionals, I&apos;m eager to explore opportunities that align with my passion for excellence and innovation.
        </p>
      </section>
    </section>
  );
}