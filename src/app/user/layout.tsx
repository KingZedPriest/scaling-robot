import Sidebar from "@/components/Sidebar";
import '../globals.css';
import { Toaster } from 'sonner';


export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <section>
      <Sidebar />
        <section className="mainWidth">{children}</section>
        <Toaster richColors position="top-center" closeButton />
      </section>

  )
}