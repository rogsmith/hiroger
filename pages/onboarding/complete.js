import Layout from '../../components/layout';
import Link from 'next/link';
import Typist from 'react-typist';
import React, {Component, Fragment} from 'react';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import Router from 'next/router';
import { withRouter } from "next/router";
import Moment from 'react-moment';

@inject('store') 
@observer
@autobind
class Complete extends Component {
    static async getInitialProps(ctx) {
        return {};
    }

    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    componentDidMount(){
        this.setState({date: this.props.router.query.event_start_time})
    }

    render(){
        return (
        <Layout>
            <section class="intro pt-40 xl:pt-52">
                <div class="container mx-auto px-5 md:flex justify-center">
                    <div class="intro-wrap text-center md:text-left">
                        <div class="profile flex items-center justify-center md:justify-start mb-10 xl:mb-8">
                            <h1 class="font-medium text-5xl xl:mt-2">We're all set.</h1>
                            <div class="profile-image w-20 ml-6 xl:ml-4">
                                <img class="rounded-full w-full" src="/images/roger-1.png" alt="roger" title="roger"/>
                            </div>
                        </div>
                        <p class="text-2xl xl:leading-none mb-10"> I will give you a call on: <Moment format="dddd, MMMM Do">{this.state.date}</Moment> at <Moment format="hh:mm A">{this.state.date}</Moment></p>
                        
                        <br/>
                        <a class="btn xl:leading-snug text-xl md:text-3xl transform hover:scale-110 motion-reduce:transform-none inline-block text-white rounded-full py-4 px-6 md:px-7 xl:px-10" href='/'>Done</a>
                    </div>
                </div>
            </section>
        </Layout>
        )
    }
}
export default withRouter(Complete);