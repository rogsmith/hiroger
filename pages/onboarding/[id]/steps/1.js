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
class Step1 extends Component {
    static async getInitialProps(ctx) {
      return {};
    }

    constructor(props) {
      super(props);
      this.state = {
        zip: ''
      }
    }

    componentDidMount(){
      if(this.props.router.query.id){
        this.props.store.fetchLead(this.props.router.query.id).then(() => {
          this.setState({zip: this.props.store.lead.zip})
        });
      }
    }

    updateLead(){
      this.props.store.lead.zip = this.state.zip;
      this.props.store.updateLead().then((lead) => {
          Router.push('/onboarding/'+this.props.store.lead._id+'/steps/2')
      })
    }

    updateZip(event){
      this.setState({zip: event.target.value})
    }

    render(){
      return (
        <Layout>
          <section className="zipcode pt-40 xl:pt-52">
              <div className="container mx-auto px-5 xl:px-0 md:flex justify-center">
                  <div className="zipcode-wrap text-center md:text-left">
                      <h1 className="xl:leading-tight text-center md:text-left font-medium text-4xl md:text-5xl mb-10 xl:mb-6">Great! I'll start by collecting a<br/> little bit of information from you. </h1>
                      <div className="form-wrap mx-auto md:ml-0">
                          <form>
                              <p className="text-2xl xl:leading-none mb-10">What is your zip code? <small>(We need this to find plans in your county)</small></p>
                              <input className="border outline-none w-72 text-xl rounded-xl py-2 px-5 md:py-3 xl:px-7 xl:pt-5 xl:pb-4" type="text" name="zip" placeholder="e.g. 92019" value={this.state.zip} onChange={this.updateZip}/>
                              <div className="btn-wrap mt-10">
                                  <a href="/onboarding/intro" className="back-btn mr-5 xl:mr-3 border capitalize text-xl md:text-3xl transform hover:scale-110 motion-reduce:transform-none inline-block text-white rounded-full py-3 px-10 md:px-12">back</a>
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
  export default withRouter(Step1);