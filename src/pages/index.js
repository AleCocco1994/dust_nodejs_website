import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/xv15_v7-removebg.png' // change this to your profile pic
import Link from 'next/link'
import {IconGitlab, IconPdf, IconMail, IconForum} from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="CodeBucks" className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col item-center self-center'>
              <AnimatedText text='DUST' className='!text-10xl !text-left'/> 
              <AnimatedText text='A novel, flexible solution to solve aerodynamics problems.' className='!my-0 !text-4xl !text-justify !font-semibold'/>
              <AnimatedText text='Engineered through a dynamic partnership between A3 by Airbus and Politecnico di Milano,  it is your gateway to affordable, customizable, and precise solutions for even the most complex aerodynamic configurations.' className='!my-0 !text-2xl !text-justify !font-semibold'/>
              <div className='flex items-center self-start mt-2'>
                <Link href="https://public.gitlab.polimi.it/DAER/dust" target={'_blank'} 
                className='flex items-center bg-dark text-light 
                          p-2.5 px-6 rounded-lg text-lg font-semibold
                          hover:bg-light hover:text-dark 
                          border-2 boder-solid boder-transparent hover:border-dark'>Repository 
                <IconGitlab className='ml-2 w-6 h-6'/> 
                </Link>
                <Link href="https://public.gitlab.polimi.it/DAER/dust/-/raw/develop/DUST_user_manual/DUST_user_manual.pdf?ref_type=heads" target={'_blank'} 
                className='mx-4 flex items-center bg-dark text-light 
                          p-2.5 px-6 rounded-lg text-lg font-semibold
                          hover:bg-light hover:text-dark 
                          border-2 boder-solid boder-transparent hover:border-dark' 
                          download={true}>Documentation
                <IconPdf className='ml-2 w-6 h-6'/> 
                </Link>
                <Link href="mailto:info@dust-project.org" target={'_blank'}
                className='mx-4 flex items-center bg-dark text-light 
                p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark 
                border-2 boder-solid boder-transparent hover:border-dark'>Contact
                <IconMail className='ml-2 w-6 h-6'/> 
                </Link>
                <Link href="https://community.dust-project.org/" target={'_blank'}
                className='mr-4 flex items-center bg-dark text-light 
                p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark 
                border-2 boder-solid boder-transparent hover:border-dark'>Community
                <IconForum className='ml-2 w-6 h-6'/>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
