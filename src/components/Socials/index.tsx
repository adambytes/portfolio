// import { Linkedin, Github, Facebook, ReplyToMessage } from 'iconoir-react'
import Link from 'next/link'
import Image from 'next/image'
import LinkedIn from '@/public/images/LinkedIn.svg'
import Github from '@/public/images/Github.svg'
import Facebook from '@/public/images/Facebook.svg'
import Email from '@/public/images/Email.svg'

type SocialIconProps = {
  svg: any
  href: string
}

export function SocialIcon({ svg, href }: SocialIconProps) {
  const SIZE = 30

  return (
    <Link href={href} className="social">
      <Image src={svg} alt="icon" width={SIZE} height={SIZE} />
    </Link>
  )
}

export default function Socials() {
  return (
    <div className="flex flex-row gap-6">
      <SocialIcon
        svg={LinkedIn}
        href="https://www.linkedin.com/in/adamvliang"
      />
      <SocialIcon svg={Facebook} href="https://www.facebook.com/" />
      <SocialIcon svg={Github} href="https://www.github.com/adambytes" />
      <SocialIcon svg={Email} href="mailto:hello@adamliang.dev" />
    </div>
  )
}
