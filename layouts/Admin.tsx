import Head from 'next/head'

// Components
import { Navbar } from 'components/Admin/Layout/Navbar'
import { AdminHeaderProps, Header } from 'components/Admin/Layout/Header'
import { Footer } from 'components/Admin/Layout/Footer'

// Data
import { event } from 'data/event'

type AdminProps = {
  header: AdminHeaderProps
  children?: React.ReactNode
}

export const Admin = ({ header, children }: AdminProps) => {
  return (
    <>
      <Head>
        <title>Admin | Geek Event</title>
        <link rel="icon" href={event.logo.favicon} />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <Header header={header} />
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">{children}</div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
