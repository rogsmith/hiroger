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

@inject('store') 
@observer
@autobind
class Step4 extends Component {
    static async getInitialProps(ctx) {
      return {};
    }

    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: '',
        phone: '',
      }
    }

    componentDidMount(){
      if(this.props.router.query.id){
        this.props.store.fetchLead(this.props.router.query.id).then(() => {
          this.setState({name: this.props.store.lead.name, email: this.props.store.lead.email, phone: this.props.store.lead.phone})
        });
      }
    }

    updateLead(){
      this.props.store.lead.name = this.state.name;
      this.props.store.lead.email = this.state.email;
      this.props.store.lead.phone = this.state.phone;
      this.props.store.updateLead().then((lead) => {
          Router.push('/onboarding/'+this.props.store.lead._id+'/steps/5')
      })
    }

    updateName(event){
      this.setState({name: event.target.value})
    }

    updateEmail(event){
      this.setState({email: event.target.value})
    }

    updatePhone(event){
      this.setState({phone: event.target.value})
    }

    render(){
      return (
        <Layout>
          <section class="zipcode pt-40 xl:pt-52">
              <div class="container mx-auto px-5 xl:px-0 md:flex justify-center">
                  <div class="zipcode-wrap text-center md:text-left">
                    <div class="profile flex items-center justify-center md:justify-start mb-10 xl:mb-8">
                      <div class="profile-image w-20">
                          <img class="rounded-full w-full" src="/images/roger-1.png" alt="roger" title="roger"/>
                      </div>
                      <p class="text-3xl xl:leading-none mb-10 mt-10 ml-2">What is your name and email? We accept aliases ;)</p>
                    </div>
                      
                      <div class="form-wrap md:ml-0 md:text-center">
                          <form>
                            <p className="text-2xl xl:leading-none mb-10"><small>We need this so that we can contact you during for our consultation.</small></p>
                            <div className='flex flex-col items-center'>
                              <input class="border outline-none w-72 text-xl rounded-xl py-2 px-5 md:py-3 xl:px-7 xl:pt-5 xl:pb-4" type="text" name="name" placeholder="Your name" value={this.state.name} onChange={this.updateName}/>
                              <input class="border outline-none w-72 text-xl rounded-xl py-2 px-5 md:py-3 xl:px-7 xl:pt-5 xl:pb-4 mt-3" type="text" name="email" placeholder="Email Address" value={this.state.email} onChange={this.updateEmail}/>
                              <div class="btn-wrap mt-10">
                                  <a href="/onboarding/intro" class="back-btn mr-5 xl:mr-3 border capitalize text-xl md:text-3xl transform hover:scale-110 motion-reduce:transform-none inline-block text-white rounded-full py-3 px-10 md:px-12">back</a>
                                  <input class="cursor-pointer outline-none text-xl md:text-3xl capitalize transform hover:scale-110 motion-reduce:transform-none text-white rounded-full py-3 px-10 md:px-12" onClick={this.updateLead} type="button" value="next"/>
                              </div>
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
  export default withRouter(Step4);