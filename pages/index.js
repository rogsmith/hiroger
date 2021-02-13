import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <section class="banner overflow-hidden pt-40 md:pt-0 pb-20">
          <div class="container px-5 mx-auto md:px-10 lg:px-12 md:relative md:flex md:items-start md:justify-between">
              <div class="banner-text text-center md:text-left mbf-20 md:w-2/5 md:mb-0 md:mt-60 xl:ml-2.5">
                  <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-3 xl:mb-6" >Medicare is complicated,</h1>
                  <span class="sub-heading block font-medium mb-6 md:mb-7 xl:mb-11 text-3xl md:text-4xl lg:text-5xl">he makes it simple.</span>
                  <a class="btn transform hover:scale-110 motion-reduce:transform-none inline-block text-white rounded-full py-4 px-5 md:px-6 text-2xl lg:text-3xl font-medium xl:leading-none xl:py-10 xl:px-12" href="/onboarding/intro">Let Roger help you</a>
              </div>
              <div class="availability md:z-30 text-center md:text-left rounded-3xl relative w-72 p-6 pt-8 mx-auto mb-10 md:mb-0 md:absolute md:top-80 md:right-1/3">
                  <div class="employee-image absolute -top-5 left-0 right-0 w-10 mx-auto xl:w-28">
                      <img class="rounded-full" src="/images/roger.png" alt="roger" title="roger"/>
                  </div>
                  <div class="details leading-tight text-xl">Roger will be available to address your needs <span class="details-text font-bold">24/7, 365 days a year</span></div>
              </div>
              <div class="banner-image md:relative md:z-20 md:-mr-10 md:w-6/12 lg:w-2/5 xl:w-1/2 2xl:w-5/12 xl:-mr-44">
                  <img class="w-full object-cover" src="/images/banner.png" alt="banner" title="banner"/>
              </div>
          </div>
      </section>
      <section class="process pt-12 pb-10 xl:pt-36">
          <div class="container px-5 mx-auto xl:px-0">
              <h2 class="text-center font-medium text-5xl mb-20 lg:text-6xl xl:mb-32">It’s a frustrating and complex process</h2>
              <div class="process-content w-full md:flex md:items-center md:justify-center">
                  <figure class="process-image mb-20 md:mb-0 md:mr-10 xl:mr-28">
                      <img class="w-full object-cover" src="/images/process.png" alt="process" title="process"/>
                  </figure>
                  <div class="process-text text-2xl text-center md:text-left">
                      <p class="mb-11 leading-tight">You're will likely choose a policy that doesn't properly cover you</p>
                      <p class="mb-11 xl:mr-28 leading-tight">You could be eligible for 3,000+ policies</p>
                      <p class="xl:mr-20 leading-tight">You may be overpaying for your plan</p>
                  </div>
              </div>
          </div>
      </section>
      <section class="simplicity py-14 lg:py-20 xl:py-40">
          <div class="container mx-auto flex items-center flex-col px-5 xl:px-0 md:flex-row md:items-start md:justify-center xl:pl-2">
              <figure class="mobile-image w-1/2 md:w-1/3 mb-12 md:mb-0 md:mr-20 lg:mr-28 lg:w-1/4 xl:mt-3">
                  <img class="object-cover w-full" src="/images/mobile.png" alt="mobile" title="mobile"/>
              </figure>
              <div class="simplicity-text text-center md:text-left md:w-2/5 md:mt-72 lg:mt-60 lg:w-5/12">
                  <h3 class="font-medium text-5xl lg:text-6xl mb-10 md:mb-12">Roger made it simple</h3>
                  <p class="mb-6 text-2xl lg:mb-8 xl:mb-10 xl:ml-1">Roger is a real person with a genuine passion behind making Medicare simple.</p>
                  <p class="text-2xl xl:ml-1">When I was helping my Mom sign up for Medicare, I realized how laborious and mystified the entire process was and couldn’t help but think…</p>
              </div>
          </div>
      </section>
      <section class="working py-14 md:py-20 xl:py-32">
          <div class="container mx-auto px-5 xl:px-0 text-center">
              <h3 class="text-center font-medium text-5xl lg:text-6xl mb-20 md:mb-32">How roger works</h3>
              <div class="working-content flex items-center flex-col md:flex-row mb-20 md:items-start md:justify-between md:mb-32 lg:mx-24 xl:mb-20">
                  <div class="work mb-20 w-80 xl:pr-28 xl:pl-4 md:mb-0">
                      <div class="work-image rounded-full w-20 h-20 xl:w-40 xl:h-40 mx-auto mb-6 xl:mb-12 relative">
                          <i class="icon-fast inline-block mt-4 xl:mt-8"></i>
                          <div class="serial-num font-semibold absolute bottom-0 right-0 w-6 h-6 xl:w-12 xl:h-12 xl:bottom-1 xl:-right-1 pt-0.5 text-white rounded-full">1</div>
                      </div>
                      <h6 class="capitalize font-bold text-2xl mb-2 xl:mb-4">fast</h6>
                      <p class="text-2xl leading-relaxed xl:ml-1.5">Answer a few questions about yourself</p>
                  </div>
                  <div class="work mb-20 w-80 md:mb-1">
                      <div class="work-image rounded-full w-20 h-20 xl:w-40 xl:h-40 mx-auto mb-6 relative xl:mb-12">
                          <i class="icon-match inline-block mt-7 xl:mt-12"></i>
                          <div class="serial-num font-semibold absolute bottom-0 right-0 w-6 h-6 xl:w-12 xl:h-12 xl:bottom-1 xl:-right-1 pt-0.5 text-white rounded-full">2</div>
                      </div>
                      <h6 class="capitalize font-bold text-2xl mb-2 xl:mb-4">match</h6>
                      <p class="text-2xl leading-relaxed">Roger’s proprietary policy-matching algorithm pairs you with your optimal policy in seconds</p>
                  </div>
                  <div class="work w-80 xl:pl-12">
                      <div class="work-image rounded-full w-20 h-20 xl:w-40 xl:h-40 mx-auto mb-6 xl:mb-12 relative">
                          <i class="icon-easy inline-block mt-6 xl:mt-12"></i>
                          <div class="serial-num font-semibold absolute bottom-0 right-0 w-6 h-6 xl:w-12 xl:h-12 xl:bottom-1 xl:-right-1 pt-0.5 text-white rounded-full">3</div>
                      </div>
                      <h6 class="capitalize font-bold text-2xl mb-2 xl:mb-4">easy</h6>
                      <p class="text-2xl leading-relaxed xl:ml-2">Connect with Roger to go over the perks of your new policy </p>
                  </div>
              </div>
              <a class="btn xl:py-10 xl:px-12 transform hover:scale-110 motion-reduce:transform-none inline-block text-white rounded-full py-4 px-5 md:px-6 text-2xl lg:text-3xl" href="#">Let Roger help you</a>
          </div>
      </section>
      <section class="trust py-10 xl:py-32">
          <div class="container mx-auto px-5 xl:px-0">
              <h3 class="text-center text-5xl lg:text-6xl mb-10 md:mb-32 xl:ml-6">You can trust roger</h3>
              <p class="text-2xl text-center md:text-left md:w-96 mb-10 md:mb-20 md:ml-10 lg:ml-40 xl:ml-56">Trust that we have evaluated <span class="font-medium">every possible combination </span>of every applicable plan</p>
              <div class="trust-detail mb-10 md:flex items-start md:mb-32 lg:justify-center xl:mb-44">
                  <figure class="trust-image mb-10 md:mb-0 md:w-1/2 md:mr-40 lg:w-2/5 xl:mr-32 xl:ml-10">
                      <img class="object-cover w-full" src="/images/trust.png" alt="trust" title="trust"/>
                  </figure>
                  <p class="text-2xl text-center md:text-right mb-10 md:mb-0 md:w-96 md:mt-40 xl:mr-12">Trust that <span class="font-medium">we aren’t incentivized by anything </span>besides your well-being</p>
              </div>
              <div class="trust-detail md:flex items-start md:ml-20 xl:ml-0 xl:mr-48 lg:justify-center">
                  <p class="text-2xl text-center md:text-left mb-10 md:mb-0 md:w-96 md:mt-40">Trust that you chose a <span class="font-medium">plan that fully protects you</span></p>
                  <figure class="trust-image md:w-1/3 md:ml-40 xl:ml-44">
                      <img class="object-cover w-full" src="/images/trust-plan.png" alt="trust" title="trust"/>
                  </figure>
              </div>
          </div>
      </section>
    </Layout>
  )
}
