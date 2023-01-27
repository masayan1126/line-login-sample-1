import Head from 'next/head'
import axios from 'axios'
import router from "next/router"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Top() {
    const router = useRouter();
    useEffect(() => {
        console.log(router.query); // router.query.code, router.query.state
    }, [router.query]);

  return (
    <>
      
      <main>
        認証済み
      </main>
    </>
  )
}