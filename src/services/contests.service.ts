import { Http } from '@angular/http';
import { IContest } from '../interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface IContestsCache {
	contests?: Observable<IContest[]>;
}

@Injectable()
export class ContestsService {
	baseURL = "http://localhost:8080/mCubedServices/";
	cache: IContestsCache = { };

	constructor(private http: Http) {
	}

	getContests(): Observable<IContest[]> {
		if (!this.cache.contests) {
			this.cache.contests = this.http.get(this.baseURL + "LineupAggregator").map<IContest[]>(
				(response, index) => response.json()
			);
		}
		return this.cache.contests;
	}
}
