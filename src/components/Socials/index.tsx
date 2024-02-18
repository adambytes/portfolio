// import { Linkedin, Github, Facebook, ReplyToMessage } from 'iconoir-react'
import Link from 'next/link'
import LinkedIn from '@/public/images/LinkedIn.svg'
import Github from '@/public/images/Github.svg'
import Facebook from '@/public/images/Facebook.svg'
import Email from '@/public/images/Email.svg'
import './styles.scss'

type SocialIconProps = {
  Svg: any
  href: string
}

export function SocialIcon({ Svg, href }: SocialIconProps) {
  const SIZE = 30

  return (
    <Link href={href} className="social">
      {/* <Image src={svg} alt="icon" width={SIZE} height={SIZE} />
       */}
      <Svg className="scale-125" />
    </Link>
  )
}

export default function Socials() {
  return (
    <div className="flex flex-row gap-6">
      <SocialIcon
        Svg={LinkedIn}
        href="https://www.linkedin.com/in/adamvliang"
      />
      <SocialIcon Svg={Facebook} href="https://www.facebook.com/" />
      <SocialIcon Svg={Github} href="https://www.github.com/adambytes" />
      <SocialIcon Svg={Email} href="mailto:hello@adamliang.dev" />
    </div>
  )
}
