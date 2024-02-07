import Loading from "@/components/Loading";
import cn from "@/utils/cn";
import { Montserrat, Space_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Socials from "@/components/Socials";

const TechList = dynamic(() => import("@/components/TechList"));

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const styles = {
  sm: "sm:mb-0",
  md: "md:mb-[8em]",
  lg: "lg:mb-[8em]",
  title:
    "sm:text-5xl lg:text-7xl font-semibold lg:font-bold md:font-bold md:text-6xl text-5xl",
  subtitle: "pb-6",
  p: "text-xs sm:text-base md:text-base py-6 text-center max-w-[80vw] md:max-w-[60vw]",
};

export default function Page() {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center grow",
        styles.sm,
        styles.md,
        styles.lg
      )}
    >
      <div className={cn(styles.title, montserrat.className)}>Adam Liang</div>
      <div className={cn(styles.subtitle, spaceMono.className)}>
        [Software Engineer]
      </div>
      <Socials />
      <div>
        <p className={cn(styles.p)}>
          Hi, I&apos;m Adam. I&apos;m a fullstack software engineer based in New
          York City.
        </p>
        <p className={cn(styles.p)}>
          I specialize in building web applications and cloud infrastructure.
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <TechList />
      </Suspense>
    </div>
  );
}
