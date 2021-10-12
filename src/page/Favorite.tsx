import LayoutContent from 'layout/Content'
import LayoutMain from 'layout/Main'
import InputSearch from 'component/InputSearch'
import LinkBackTo from 'component/LinkBackTo'

const Favorite = () => {
  return (
    <LayoutMain>
      <LayoutContent className="bg-purple min-h-screen" mobileTopbarHidden>
        <div className="py-2 md:ml-8">
          <LinkBackTo to="/" />
        </div>
        <section className="py-8">
          <div className="hidden md:block">
            <InputSearch onChange={() => {}} placeholder="Busque por projetos" />
          </div>
          <div className="block md:hidden">
            <InputSearch onChange={() => {}} dark placeholder="Busque por projetos" />
          </div>
        </section>
        <section className="mt-3">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Aqui você encontrará os favoritos.
          </h1>
        </section>
      </LayoutContent>
    </LayoutMain>
  )
}

export default Favorite