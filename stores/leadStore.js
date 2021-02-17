import { action, observable, computed, runInAction, makeObservable } from 'mobx';

export default class LeadStore {
    @observable lead = {};
  
    endpoint = 'leads';
  
    constructor(initialData = {}) {
        makeObservable(this);
        this.lead = initialData.lead;
    }

    @action hydrate = (data) => {
        if (!data) return
    
        this.lead = data;
    }

    /**
     * Create a new lead and save response
     * @param {*} lead 
     */
    @action createLead(lead){
        return fetch('/api/leads', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(lead),
        })
        .then(response => response.json())
        .then(data => {
            this.hydrate(data)
        })
    }

    @action updateLead(){
        return fetch('/api/leads', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.lead),
        })
        .then(response => response.json())
        .then(data => {
            this.hydrate(data)
        })
    }

    @action fetchLead(id){
        return fetch(`/api/leads?id=${id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            this.hydrate(data)
        })        
    }

    /**
     * Save an already created lead back to server
     * @param {*} lead 
     */
    async save(lead){

    }
  
    async fetch(id) {
      const response = await makeFetchRequest(`${this.endpoint}/${id}/`);
      this.setLead(response);
    }
  
    @action setLead(lead) {
      this.lead = lead;
    }
  }