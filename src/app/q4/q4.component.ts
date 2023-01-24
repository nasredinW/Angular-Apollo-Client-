import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const launches = gql`{
  launchesPast(limit: 20) {
    mission_name
    launch_date_local
    launch_success
  }
}`;
@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component {

  loading = true;
  data: any;

  Result: any= [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.query({
      query: launches
    }).subscribe(({data, loading}) => {
      this.data = data;
      this.loading = loading;
    });
  }

  getMissionSearch(missions:any ){
    if(missions && missions.length>1)
      return missions.reduce((acc: { mission_name: string; } ,cur: { mission_name: string; }) => acc.mission_name+","+cur.mission_name);
      else if (missions && missions.length == 0) return missions[0].mission_name;
  }

}
