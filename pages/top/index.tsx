import Head from 'next/head'
import axios from 'axios'
import router from "next/router"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Top() {
    const router = useRouter();
    useEffect(() => {
        console.log(router.query); // router.query.code, router.query.state
        const generateAccessToken = async() => {
            const res = await axios.post(
                process.env.NEXT_PUBLIC_LINE_ACCESS_TOKEN_URL || "",
                {
                    grant_type: 'authorization_code',
                    code: router.query.code,
                    redirect_uri: process.env.NEXT_PUBLIC_LINE_AUTH_REDIRECT_URI,
                    client_id: process.env.NEXT_PUBLIC_LINE_AUTH_CLIENT_ID,
                    client_secret: process.env.NEXT_PUBLIC_LINE_AUTH_CLIENT_SECRET,
                }
            );
    
            console.log(res.data);
        }

        generateAccessToken()
    }, [router.query]);

  return (
    <>
      
      <main>
        認証済み
      </main>
    </>
  )
}