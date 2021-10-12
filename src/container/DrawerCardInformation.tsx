import Button from 'component/Button'
import Drawer from 'component/Drawer'
import Input from 'component/Input'
import { TaskInterface } from 'types'

export interface DrawerCardInformationProps {
  card: TaskInterface
}

const DrawerCardInformation = (props: DrawerCardInformationProps) => {

  const { card } = props

  return (
    <Drawer 
      title="Card Information"
      onClose={console.log}
    >
      <form className="space-y-10 pb-20">
        <div>
          <label className="text-primary font-sm mb-1 block">
            Title
          </label>
          <Input 
            value={card.name}
          />
        </div>
        <div>
          <label className="text-primary font-sm mb-1 block">
            Prioridade color
          </label>
          <Input />
        </div>
        <div>
          <label className="text-primary font-sm mb-1 block">
            Tags relacionadas
          </label>
          <Input />
        </div>
        <div>
          <label className="text-primary font-sm mb-3 block">
            Responsáveis
          </label>
          <div>
            <ul className="flex space-x-1">
              <li>
                <div className="w-10 h-10 rounded-full bg-gray-200" />
              </li>
              <li>
                <div className="w-10 h-10 rounded-full bg-gray-200" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <label className="text-primary font-sm mb-1 block">
            Adicionar responsável
          </label>
          <Input 
            withButton
            buttonText="Send"
          />
        </div>
        <div>
          <label className="text-primary font-sm mb-1 block">
            Add. arquivo
          </label>
          <Input 
            withButton
            buttonText="Browse"
          />
        </div>
        <div>
          <label className="text-primary font-sm mb-1 block">
            Comment
          </label>
          <textarea className="input input-body input-rounded" style={{ height: 150 }}></textarea>
        </div>
        <div>
          <div className="float-right flex space-x-4">
            <Button>
              Save
            </Button>
            <Button>
              Delete
            </Button>
          </div>
        </div>
      </form>
    </Drawer>
  )
}

export default DrawerCardInformation