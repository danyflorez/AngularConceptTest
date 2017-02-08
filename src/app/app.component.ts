import { Component, OnInit } from '@angular/core';
import {Subdomain} from './Subdomain';
import {SubDomainService} from './app.subdomainService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMessage: string;
  subdomains: Subdomain[];

  constructor (private subdomainService: SubDomainService) {}
  ngOnInit() { this.getSubdomains(); }
  getSubdomains() {
    this.subdomainService.getSubdomains()
                     .subscribe(
                       subdomains => { this.subdomains = subdomains;},
                       error =>  this.errorMessage = <any>error);
  }
  addSubdomain (name: string) {
 
    this.subdomainService.saveSubdomain(new Subdomain(1242, name)).subscribe(
                       subdomains => { this.subdomains = subdomains;},
                       error =>  this.errorMessage = <any>error);;
  }
}