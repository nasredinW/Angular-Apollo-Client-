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
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component {
  loading = true;
  data: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.query({
      query: launches
    }).subscribe(({data, loading}) => {
      this.data = data;
      this.loading = loading;
    });
  }

}
