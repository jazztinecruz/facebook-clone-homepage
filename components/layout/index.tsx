import Header from "./header"

const Layout = ({ children }: any) => {
  return (
    <div className="h-screen grid grid-rows-[auto,1fr] gap-6">
      <head>
        <title>Facebook Clone | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <header>
        <Header/>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default Layout
