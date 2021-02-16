import Layout from '../../components/layout';
import Link from 'next/link';
import Typist from 'react-typist';
import React, {Component, Fragment} from 'react';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('store') 
@observer
@autobind
export default class Start extends Component {

    constructor(props) {
        super(props);
    }

    initLead(){
        console.log("start")
        this.props.store.createLead({zip: '96724'})
    }

    render(){
        console.log("ROGER")
        console.log(this.props.store.lead)
        let lead = this.props.store.lead;
        return (
        <Layout>
            <section class="intro pt-40 xl:pt-52">
                <div class="container mx-auto px-5 md:flex justify-center">
                    <div class="intro-wrap text-center md:text-left">
                        <div class="profile flex items-center justify-center md:justify-start mb-10 xl:mb-8">
                            <h1 class="font-medium text-5xl xl:mt-2">Hi, I’m Roger { lead?.zip }</h1>
                            <div class="profile-image w-20 ml-6 xl:ml-4">
                                <img class="rounded-full w-full" src="/images/roger-1.png" alt="roger" title="roger"/>
                            </div>
                        </div>
                        <p class="text-2xl xl:leading-none mb-10">I’m here to help find a Medicare solution that best suits your needs.</p>
                        <a class="btn xl:leading-snug text-xl md:text-3xl transform hover:scale-110 motion-reduce:transform-none inline-block text-white rounded-full py-4 px-6 md:px-7 xl:px-10" onClick={this.initLead}>Let’s start</a>
                    </div>
                </div>
            </section>
        </Layout>
        )
    }
  }