import Head from 'next/head'
import axios from 'axios'
import router from "next/router"
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface Props {
    data: any
}

export default function Top(props: Props) {
    const router = useRouter();
    useEffect(() => {
        console.log(props.data); // router.query.code, router.query.state
        
    }, [props.data]);

  return (
    <>
      
      <main>
        認証済み
      </main>
    </>
  )
}

export async function getServerSideProps (context: any) {
    const generateAccessToken = async() => {
        console.log(context.query);
    
        const res = await axios.post(
            process.env.NEXT_PUBLIC_LINE_ACCESS_TOKEN_URL || "",
            {
                grant_type: 'authorization_code',
                code: context.query.code,
                redirect_uri: process.env.NEXT_PUBLIC_LINE_AUTH_REDIRECT_URI,
                client_id: process.env.NEXT_PUBLIC_LINE_AUTH_CLIENT_ID,
                client_secret: process.env.NEXT_PUBLIC_LINE_AUTH_CLIENT_SECRET,
            }
        );
        
        return res.data
    }
    
    const data = await generateAccessToken()

    return {
        props: {
            data,
        }
    }
}