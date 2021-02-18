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
class Step2 extends Component {
    static async getInitialProps(ctx) {
      return {};
    }

    constructor(props) {
      super(props);
      this.state = {
        yob: ''
      }
    }

    componentDidMount(){
      if(this.props.router.query.id){
        this.props.store.fetchLead(this.props.router.query.id).then(() => {
          this.setState({yob: this.props.store.lead.yob})
        });
      }
    }

    updateLead(){
      this.props.store.lead.yob = this.state.yob;
      this.props.store.updateLead().then((lead) => {
          Router.push('/onboarding/'+this.props.store.lead._id+'/steps/3')
      })
    }

    updateYob(event){
      this.setState({yob: event.target.value})
    }

    render(){
      return (
        <Layout>
          <section className="zipcode pt-40 xl:pt-52">
              <div className="container mx-auto px-5 xl:px-0 md:flex justify-center">
                  <div className="zipcode-wrap text-center md:text-left">
                    <div className="profile flex items-center justify-center md:justify-start mb-10 xl:mb-8">
                      <div className="profile-image w-20">
                          <img className="rounded-full w-full" src="/images/roger-1.png" alt="roger" title="roger"/>
                      </div>
                      <p className="text-3xl xl:leading-none mb-10 mt-10 ml-2">What year were born?</p>
                    </div>
                      
                      <div className="form-wrap md:ml-0 md:text-center">
                          <form>
                              <input className="border outline-none w-72 text-xl rounded-xl py-2 px-5 md:py-3 xl:px-7 xl:pt-5 xl:pb-4" type="number" name="Year of birth" placeholder="e.g. 1956" value={this.state.yob} onChange={this.updateYob}/>
                              <div className="btn-wrap mt-10">
                                  <a href={`/onboarding/${this.props.store.lead._id}/steps/1`} className="back-btn mr-5 xl:mr-3 border capitalize text-xl md:text-3xl transform hover:scale-110 motion-reduce:transform-none inline-block text-white rounded-full py-3 px-10 md:px-12">back</a>
                                  <input className="cursor-pointer outline-none text-xl md:text-3xl capitalize transform hover:scale-110 motion-reduce:transform-none text-white rounded-full py-3 px-10 md:px-12" onClick={this.updateLead} type="button" value="next"/>
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
  export default withRouter(Step2);