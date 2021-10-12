const UserList = () => {
  return (
    <div>
      <ul className="flex">
        <li>
          <div className="h-10 w-10 -mr-3 rounded-full bg-gray-200 border-4 border-white shadow-md">
            <img className="rounded-full" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
          </div>
        </li>
        <li>
          <div className="h-10 w-10 -mr-3 rounded-full bg-gray-200 border-4 border-white shadow-md">
            <img className="rounded-full" src="https://uifaces.co/our-content/donated/KtCFjlD4.jpg" />
          </div>
        </li>
        <li>
          <div className="h-10 w-10 rounded-full bg-gray-200 border-4 border-white shadow-md">
            <img className="rounded-full" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default UserList