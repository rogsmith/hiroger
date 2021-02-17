import Layout from '../../../../components/layout';
import Link from 'next/link';
import Typist from 'react-typist';
import { inject, observer } from 'mobx-react';
import { Component } from 'react';
import autobind from 'autobind-decorator';
import Router from 'next/router';
import { useRouter } from 'next/router'
import { withRouter } from "next/router";
import Document from 'next/document'
import { InlineWidget,PopupWidget, openPopupWidget } from "react-calendly"

@inject('store') 
@observer
@autobind
class Step5 extends Component {
    static async getInitialProps(ctx) {
      return {};
    }

    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: '',
      }
    }

    componentDidMount(){
      if(this.props.router.query.id){
        this.props.store.fetchLead(this.props.router.query.id).then(() => {
          this.setState({name: this.props.store.lead.name, email: this.props.store.lead.email})
          this.openCalendly();
        });
      }
    }

    openCalendly(){
      openPopupWidget(
        { 
          pageSettings:{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: true,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055'
          },
          prefill:{
            email: this.props.store.lead.email,
            name: this.props.store.lead.name
          },
          styles:{
            height: '1000px'
          },
          url: "https://calendly.com/hiroger"
        })
    }

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
                      </div>
                  </div>
              </div>
          </section>
        </Layout>
      )
    }
}
export default withRouter(Step5);