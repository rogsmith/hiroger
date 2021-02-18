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
class Step3 extends Component {
    static async getInitialProps(ctx) {
      return {};
    }

    constructor(props) {
      super(props);
      this.state = {
        enrolled: "0"
      }
    }

    componentDidMount(){
      if(this.props.router.query.id){
        this.props.store.fetchLead(this.props.router.query.id).then(() => {
          this.setState({enrolled: this.props.store.lead.enrolled})
        });
      }
    }

    updateLead(){
      this.props.store.lead.enrolled = this.state.enrolled;
      this.props.store.updateLead().then((lead) => {
          Router.push('/onboarding/'+this.props.store.lead._id+'/steps/4')
      })
    }

    updateEnrolledStatus(event){
      this.setState({enrolled: event.target.value})
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
                      <p class="text-3xl xl:leading-none mb-10 mt-10 ml-2">Are you currrently enrolled in Medicare?</p>
                    </div>
                      
                      <div class="form-wrap md:ml-0 md:text-center">
                          <form>
                            <div class="mt-2 flex flex-col">
                              <label class="inline-flex items-left">
                                <input type="radio" class="form-radio" name="enrolled" value="1" onChange={this.updateEnrolledStatus}/>
                                <span class="ml-2 text-2xl">Yes, I am already enrolled.</span>
                              </label>
                              <label class="inline-flex items-left mt-2">
                                <input type="radio" class="form-radio" name="enrolled" value="0" onChange={this.updateEnrolledStatus}/>
                                <span class="ml-2 text-2xl">No, I have not enrolled in any Medicare yet.</span>
                              </label>
                            </div>
                              <div class="btn-wrap mt-10">
                                  <a href="/onboarding/intro" class="back-btn mr-5 xl:mr-3 border capitalize text-xl md:text-3xl transform hover:scale-110 motion-reduce:transform-none inline-block text-white rounded-full py-3 px-10 md:px-12">back</a>
                                  <input class="cursor-pointer outline-none text-xl md:text-3xl capitalize transform hover:scale-110 motion-reduce:transform-none text-white rounded-full py-3 px-10 md:px-12" onClick={this.updateLead} type="button" value="next"/>
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
  export default withRouter(Step3);