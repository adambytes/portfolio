import {
  Linkedin,
  Twitter,
  Github,
  Facebook,
  ReplyToMessage,
} from "iconoir-react";
import cn from "@/utils/cn";
import Link from "next/link";

const style = {
  color: "--foreground",
};

type SocialIconProps = {
  Icon: any;
  href: string;
};

export function SocialIcon({ Icon, href }: SocialIconProps) {
  const SIZE = 30;

  return (
    <Link href={href} className="social">
      <Icon color={cn(style.color)} height={SIZE} width={SIZE} />
    </Link>
  );
}

export default function Socials() {
  const size = 30;
  return (
    <div className="flex flex-row gap-6">
      <SocialIcon Icon={Linkedin} href="https://www.linkedin.com" />
      <SocialIcon Icon={Facebook} href="https://www.facebook.com" />
      <SocialIcon Icon={Github} href="https://www.github.com" />
      <SocialIcon Icon={Twitter} href="https://www.twitter.com" />
      <SocialIcon Icon={ReplyToMessage} href="mailto:hello@adamliang.dev" />
    </div>
  );
}
