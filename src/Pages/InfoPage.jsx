import { Link, useParams } from 'react-router-dom'
import useAppReady from '../hooks/Useappready'

const pages = {
  about: ['About WakaDotCom', 'Learn about the products and people behind the WakaDotCom ecosystem.'],
  contact: ['Contact WakaDotCom', 'Get in touch with our team for product, partnership, or support enquiries.'],
  careers: ['Careers', 'Career opportunities will be published here.'],
  partners: ['Partners', 'Partnership information will be published here.'],
  faqs: ['Frequently asked questions', 'Answers to common questions will be published here.'],
  help: ['Help center', 'Support resources will be published here.'],
  privacy: ['Privacy policy', 'Our privacy policy will be published here.'],
  terms: ['Terms of service', 'Our terms of service will be published here.'],
}

export default function InfoPage() {
  useAppReady()
  const { page } = useParams()
  const [title, description] = pages[page] ?? ['Page not found', 'The page you requested does not exist.']

  return (
    <main className="grid min-h-screen place-items-center bg-[#FFF5EB] px-6 text-center text-[#1B1B1B]">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FB7A00]">WakaDotCom</p>
        <h1 className="mt-4 text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg text-[#5F5A55]">{description}</p>
        <Link className="mt-8 inline-flex rounded-xl bg-[#1B1B1B] px-5 py-3 font-semibold text-white" to="/">
          Return home
        </Link>
      </div>
    </main>
  )
}
