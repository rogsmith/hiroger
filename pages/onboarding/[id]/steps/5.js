import Layout from '../../components/layout';
import Link from 'next/link';
import Typist from 'react-typist';
import { Component } from 'react';

export default class Step5 extends Component {

    render(){
      return (
        <Layout>
          <section class="zipcode pt-40 xl:pt-52">
              <div class="container mx-auto px-5 xl:px-0 md:flex justify-center">
                  <div class="zipcode-wrap text-center md:text-left">
                    <div class="profile flex items-center justify-center md:justify-start mb-10 xl:mb-8">
                        <h1 class="font-medium text-5xl xl:mt-2">Schedule a time to chat.</h1>
                        <div class="profile-image w-20 ml-6 xl:ml-4">
                            <img class="rounded-full w-full" src="/images/roger-1.png" alt="roger" title="roger"/>
                        </div>
                    </div>
                      
                      <div class="form-wrap mx-auto md:ml-0">
                          <form>
                              <p class="text-2xl xl:leading-none mb-10">Select a date and time below that works to speak with me.</p>
                              <input class="border outline-none w-72 text-xl rounded-xl py-2 px-5 md:py-3 xl:px-7 xl:pt-5 xl:pb-4" type="text" name="Year of birth" placeholder="e.g. 1956"/>
                              <div class="btn-wrap mt-10">
                                  <a href="/onboarding/intro" class="back-btn mr-5 xl:mr-3 border capitalize text-xl md:text-3xl transform hover:scale-110 motion-reduce:transform-none inline-block text-white rounded-full py-3 px-10 md:px-12">back</a>
                                  <input class="cursor-pointer outline-none text-xl md:text-3xl capitalize transform hover:scale-110 motion-reduce:transform-none text-white rounded-full py-3 px-10 md:px-12" type="submit" value="next"/>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
        </Layout>
      )
    }
  }