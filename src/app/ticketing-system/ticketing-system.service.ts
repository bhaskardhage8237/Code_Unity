import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketingSystemService {

  // constructor(private http: HttpClient,
  //   private globals: Globals,
  //   private commonService: CommonService,
  //   private router: Router,) { }
    
  //   add(data: any) {
  //     return new Promise((resolve, reject) => {
  //       firstValueFrom(
  //         this.http.post(
  //           this.globals.baseAPIUrl + '/ticket/add',
  //           data
  //         )
  //       ).then(
  //         (res) => {
  //           resolve(res);
  //         },
  //         (msg) => {
  //           reject(msg);
  //         }
  //       );
  //     });
  //   }

    

  // getAll(){
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.get(
  //         this.globals.baseAPIUrl + '/ticket/ticket-list'
  //       )
  //     ).then(
  //       (res) => {
  //         resolve(res);
  //       },
  //       (msg) => {
  //         reject(msg);
  //       }
  //     );
  //   });
  // }

  // getTypeList(){
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.get(
  //         this.globals.baseAPIUrl + '/ticket/type-list'
  //       )
  //     ).then(
  //       (res) => {
  //         resolve(res);
  //       },
  //       (msg) => {
  //         reject(msg);
  //       }
  //     );
  //   });
  // }

  // getInfo(id: string | null) {
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.get(this.globals.baseAPIUrl + '/ticket/get-by-id/' + id)
  //     ).then(
  //       (res) => {
  //         resolve(res);
  //       },
  //       (msg) => {
  //         reject(msg);
  //       }
  //     );
  //   });
  // }

  // getHistory(id: string | null) {
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.get(this.globals.baseAPIUrl + '/ticket/action-details/' + id)
  //     ).then(
  //       (res) => {
  //         resolve(res);
  //       },
  //       (msg) => {
  //         reject(msg);
  //       }
  //     );
  //   });
  // }

  // cancel(id: string | null) {
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.get(this.globals.baseAPIUrl + '/ticket/delete/' + id)
  //     ).then(
  //       (res) => {
  //         resolve(res);
  //       },
  //       (msg) => {
  //         reject(msg);
  //       }
  //     );
  //   });
  // }

  // takeAction(id: string | null, entity: any) {
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.post(this.globals.baseAPIUrl + '/ticket/take-action/' + id, entity)
  //     ).then(
  //       (res) => {
  //         resolve(res);
  //       },
  //       (msg) => {
  //         reject(msg);
  //       }
  //     );
  //   });
  // }

  // getAssigneeRoles() {
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.get(this.globals.baseAPIUrl + '/ticket/role-list')
  //     ).then(
  //       (res) => {
  //         resolve(res);
  //       },
  //       (msg) => {
  //         reject(msg);
  //       }
  //     );
  //   });
  // }

  // getStatusList() {
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.get(this.globals.baseAPIUrl + '/ticket/status-list')
  //     ).then(
  //       (res) => {
  //         resolve(res);
  //       },
  //       (msg) => {
  //         reject(msg);
  //       }
  //     );
  //   });
  // }


  // getTopicList(id: string | null){
  //   console.log(id)
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.get(
  //         this.globals.baseAPIUrl + '/ticket/topic-list/' + id
  //         )
  //         ).then(
  //           (res) => {
  //             resolve(res);
  //           },
  //           (msg) => {
  //             reject(msg);
  //           }
  //           );
  //         });
  //       }

  // getSubTopicList(id: string | null){
  //   return new Promise((resolve, reject) => {
  //     firstValueFrom(
  //       this.http.get(
  //         this.globals.baseAPIUrl + '/ticket/sub-topic-list/' + id
  //       )
  //     ).then(
  //       (res) => {
  //         resolve(res);
  //       },
  //       (msg) => {
  //         reject(msg);
  //       }
  //     );
  //   });
  // }
}
