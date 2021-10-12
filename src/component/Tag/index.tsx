import classNames from 'classnames'

export interface TagProps {
  text: string
  active?: boolean
}

const Tag = (props: TagProps) => {

  const { text, active } = props

  const tagClass = classNames(
    'py-2 px-6 rounded-full',
    {
      'bg-black text-white': active,
      'bg-light-blue text-primary': !active
    }
  )

  return (
    <span className={tagClass}>
      { text }
    </span>
  )
}

Tag.defaultProps = {
  active: false
}

export default Tag