import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component  {
  loading = false;
  data: any;
  mission_name! : string;
  Result: any= [];
  error!: string;
  constructor(private apollo: Apollo) {}

  getMissionSearch(missions:any ){
    if(missions && missions.length>1)
      return missions.reduce((acc: { mission_name: string; } ,cur: { mission_name: string; }) => acc.mission_name+","+cur.mission_name);
      else if (missions && missions.length == 0) return missions[0].mission_name;
  }
   findMission(){
    this.error = "";
    this.loading = true;
    this.apollo
      .query<any>({
        query: gql`
        launchesPast(limit: 20) {
          mission_name
          launch_date_local
          launch_success
        `,
        variables: {
          id: this.mission_name
        }
      })
      .subscribe(({data, loading}) => {
        this.data = data;
        this.loading = loading;
    
         this.error = "Mission  does not exits";
        this.loading = loading;
      });
  }
   }




