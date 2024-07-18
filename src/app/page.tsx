import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { HandCoins, Server, Key } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          More Computing Power. <br /> Less Cost.
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Experience state-of-the-art cloud computing solutions, custom-built for your unique projects and requirements.
        </Typography>
        <Link
          href="signup"
        >
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/hero1.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Quick Solutions, Less Stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<HandCoins size={24} />}
              headline="Affordability"
              description="Enjoy cloud computing solutions that fit your budget. Our advanced AI crafts personalized plans to meet your needs and budget."
            />
            <Feature
              icon={<Server size={24} />}
              headline="Technology"
              description="From web hosting to virtual machines, we provide all the technology your company requires."
            />
            <Feature
              icon={<Key size={24} />}
              headline="Security"
              description="Your data is secure with us, thanks to our top-tier security measures."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Instant Setup, No Waiting
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Rapidly create VMs customized for your individual or company needs. Our services range from web servers to APIs, ensuring you have everything you need.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="book-a-demo"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
