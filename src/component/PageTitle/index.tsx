export interface PageTitleProps {
  title: string
  subtitle?: string
}

const PageTitle = (props: PageTitleProps) => {

  const { title, subtitle } = props

  return (
    <div>
      {
        subtitle &&
        <p className="page-subtitle mb-2">
          { subtitle }
        </p>
      }
      <h1 className="page-title">
        { title }
      </h1>
    </div>
  )
}

export default PageTitle