import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@NgModule()


export class PeopleService {
    

    constructor(private http: HttpClient) { }

    fecthPeople(): Observable<Object> {

        return this.http.get('/assets/data/people.json');



    }


    fecthage() : Observable<Object>{

        return this.http.get('/assets/data/age.json');


    }



}


