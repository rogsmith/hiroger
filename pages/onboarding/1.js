import Layout from '../../components/layout';
import Link from 'next/link';
import Typist from 'react-typist';

export default function Step1() {
    return (
      <Layout>
        <div className='flex flex-auto justify-center pt-10'>
            <div className='md:w-1/2 justify-center items-start text-center'>
                <div className=' md:text-left'>
                    <h1 className='my4 text-3xl font-bold'>
                        <p>Great! Please enter your zip code?</p>
                    </h1>
                </div>
                <div className='flex flex-auto flex-row mt-10'>
                    <input type='text' placeholder='Zip Code' className='mr-5 shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out'/>
                    <button type='button' className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>Go</button>
                </div>
            </div>
        </div>
      </Layout>
    )
  }