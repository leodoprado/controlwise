import { Link } from 'react-router-dom'

import NotFoundImg from '@/assets/404.svg'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <img src={NotFoundImg} alt="" srcSet="" />
      <p className="text-accent-foreground">
        Voltar para a{'  '}
        <Link to="/" className="text-primary">
          Home Page
        </Link>
      </p>
    </div>
  )
}
