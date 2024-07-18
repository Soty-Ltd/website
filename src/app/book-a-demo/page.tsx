import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import { HandCoins, Server, Key } from 'lucide-react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"

export default function Page() {
  return (
    <div
      className="flex flex-col h-full md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Book a Demo
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Get a demo of our state-of-the-art cloud computing platform
        </Typography>
        <div className='flex'>
          <Input type="name" className='md:mx-5' placeholder="First Name" />
          <Input type="name" className='md:mx-5' placeholder="Last Name" />
        </div>
        <div className='flex'>
          <Input type="name" placeholder="Company Name" />
          <Input type="name" placeholder="Job Title" />
        </div>

        <Input type="email" placeholder="Work E-Mail" width={20} />
        <Input type="number" placeholder="Company Size" />
        <Input type="name" placeholder="Company Type" />
        <Input type="name" placeholder="Tell us more about your needs." />
        <Link
          href="signup.html"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Submit`}
          </Button>
        </Link>

      </div>
    </div>

  )
}
