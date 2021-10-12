import { Link } from 'react-router-dom'

export interface LinkBackToProps {
  to: string
}

const LinkBackTo = (props: LinkBackToProps) => {

  const { to } = props

  return (
    <Link to={to} className="table">
      <img 
        src="/asset/image/icon/arrow-left--white.svg" 
        title="Voltar" 
        alt="Voltar"
        className="w-5 h-5 md:h-auto md:w-auto"
      />
    </Link>
  )
}

export default LinkBackTo