import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from './base/rest.service';
import { urls } from '../../config/constants';

@Injectable( {
  providedIn: 'root'
} )
export class VisitorService {

  constructor( private http: HttpClient, private restService: RestService ) { }

  createNewVisitor( visitorObj: any ) {
    return this.restService.jsonPost( urls.BASE_URL + urls.CREATE_NEW_VISITOR, visitorObj )
  }

  fetchAllVisitors() {
    return this.restService.get( urls.BASE_URL );
  }

  fetchVisitorsByInTime( startDate: string, endDate: string ) {
    let params = new HttpParams();
    params.set( 'startDate', startDate );
    params.set( 'endDate', endDate );
    return this.restService.get( urls.BASE_URL + urls.GET_VISITORS_BY_IN_TIME, { params: params } );
  }

  updateExitTime( visitorSummaryId: string, exitTime: number ) {
    return this.restService.jsonPut( urls.BASE_URL + visitorSummaryId, exitTime );
  }

  fetchVisitor( id: string ) {
    return this.restService.get( urls.BASE_URL + id );
  }

  searchVisitor( searchObj: any ) {
    return this.restService.jsonPost( urls.BASE_URL + urls.SEARCH, searchObj )
  }

  deleteVisitorSummary( visitSummaryId: string ) {
    return this.restService.get( urls.BASE_URL + visitSummaryId );
  }
}
