'use client';

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import { HandCoins, Server, Key , AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useState } from 'react';

export default function Page() {
  const [showAlert, setShowAlert] = useState(true);

  const handleLogin = () => {
    // Perform login logic here
    setShowAlert(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div
      className="flex flex-col h-full md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Log in
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Log in, to view and manage your Services
        </Typography>
        <Input type="email" placeholder="Email or Username" onKeyPress={handleKeyPress} />
        <Input type="password" placeholder="Password" onKeyPress={handleKeyPress} />

        {!showAlert && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              This Email and Password combination is wrong
            </AlertDescription>
          </Alert>
        )}

        <Button size="tiny" variant="ghost" onClick={handleLogin}>
          {`Log in`}
        </Button>
      </div>
    </div>
  );
}
