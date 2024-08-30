import { Outlet } from 'react-router-dom'

import home from '@/assets/home.svg'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-[3fr_7fr]">
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="flex h-full flex-col items-center justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex flex-grow flex-col items-center justify-center">
          <img
            className="h-auto max-h-[80vh] w-full max-w-[80vw]"
            src={home}
            alt="Home"
          />
        </div>
        <footer className="mt-4 text-sm">
          &copy; Control Wise - {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}
