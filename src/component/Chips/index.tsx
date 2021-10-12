import { useState } from "react"

export interface ChipsProps {
  onUpdate?: (tags: string[]) => any
}

const Chips = (props: ChipsProps) => {

  const { onUpdate } = props

  const [tag, setTag] = useState('' as string)
  const [tags, setTags] = useState([] as string[])

  const addTagHandler = (e: React.KeyboardEvent) => {

    if(e.key === 'Enter' && tag && !tags.includes(tag)){
      const newTags = [...tags, tag]
      setTags(newTags)
      setTag('')
      onUpdateHandler(newTags)
    }
  }

  const removeTagHandler = (index: number) => {
    const tagsCloned = JSON.parse(JSON.stringify(tags))
    tagsCloned.splice(index, 1)
    setTags(tagsCloned)
    onUpdateHandler(tagsCloned)
  }

  const onUpdateHandler = (tags: string[]) => {
    if(onUpdate){
      onUpdate(tags)
    }
  }

  return (
    <div>
      <ul className="flex flex-wrap form-element rounded px-1">
        {
          tags.map((tag, index) => (
            <li key={index} className="bg-purple table p-2 py-1 rounded m-1">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-white">
                  { tag }
                </span>
                <button onClick={() => removeTagHandler(index)}>
                  <img
                    src="/asset/image/icon/close--white.svg"
                    alt="X"
                    title="Remover tag"
                    className="w-2 h-2"
                  />
                </button>
              </div>
            </li>
          ))
        }
        <li className="flex items-center">
          <input 
            className="w-32 p-1 px-2 outline-none text-sm" 
            type="text" 
            placeholder="Add tag"
            onChange={e => setTag(e.target.value)}
            onKeyPress={addTagHandler}
            value={tag}
          />
        </li>
      </ul>
    </div>
  )
}

export default Chips