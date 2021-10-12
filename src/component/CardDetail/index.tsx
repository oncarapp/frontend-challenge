import { Link } from 'react-router-dom'

export interface CardDetailProps {
  title: string
  link: string
  linkText?: string
}

const CardDetail = (props: CardDetailProps) => {

  const { title, link, linkText } = props

  return (
    <div className="detail-card detail-body flex flex-col">
      <div className="detail-info detail-body flex flex-col mt-auto">
        <Link to={link}>
          <p className="detail-title">
            { title }
          </p>
        </Link>
        <Link to={link} className="detail-read-more mt-auto">
          { linkText }
        </Link>
      </div>
    </div>
  )
}

CardDetail.defaultProps = {
  linkText: 'Saiba mais'
}

export default CardDetail