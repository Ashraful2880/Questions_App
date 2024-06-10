'use client'
import { useRouter } from 'next/navigation'

const Home=()=> {
  const router = useRouter()
  return (
    <div>
      <h2 className="text-3xl text-center font-semibold text-indigo-600">
        Welcome to Next JS 14
      </h2>
      <div className="flex justify-center mt-5">
        <button  type="button" onClick={() => router.push('/questions')} className="border px-3 py-1.5 font-medium bg-gray-100">
          Let's Start
        </button>
      </div>
    </div>
  );
}

export default Home