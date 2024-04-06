import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent {
//   constructor(
//     protected globals: Globals,
//     protected commonService: CommonService,
//     protected ticketService: AppTicketingSystemService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private sanitizer: DomSanitizer
//   ) { }

//   id: string | null = null;
//   isReporter: boolean = false;
//   isReviewer: boolean = false;
//   isAdmin: boolean = false;
//   dataLoaded: boolean = false;
//   isApplicant: boolean = false;
 

//   ngOnInit() {
//     console.log('this.isApplicant');
//     this.isApplicant = this.globals.currentLink.split('/')[1] == 'tickets';
//     console.log(this.isApplicant);
//     this.commonService.showLoader();
//     this.id = this.route.snapshot.paramMap.get('id');
//     if (this.id) {
//       this.getTicketInfo();
//       this.getAssigneeRoles();
//       this.getStatusList();
//     } else {
//       this.commonService.showCommonErrorNotification(
//         'Ticket not found in the record!'
//       );
//       this.router.navigate(['/tickets']);
//     }
//   }

// // checkUrl(value: string): boolean {
// //   return value.includes('http://') || 
// //   value.includes('https://') || 
// //   value.includes('www.') || 
// //   value.includes('.com');
// // }

// // extractUrlParts(text: string): { start: number, end: number } {
// //   const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([^\s]+:\/\/[^\s]+\.com)$/; 
// //   const match = text.match(urlRegex);

// //   if (match && match.index !== undefined) {
// //     return { start: match.index, end: match.index + match[0].length };
// //   }
// //   return { start: 0, end: 0 };
// // }

// // replaceUrlWithLink(text: string): any {
// //   const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([^\s]+\.com)/g;
// //   return this.sanitizer.bypassSecurityTrustHtml(
// //     text.replace(urlRegex, (match) => {
// //       let href = match;

// //       // Add http:// for www URLs
// //       if (match.startsWith('www.') && !match.startsWith('http://') && !match.startsWith('https://')) {
// //         href = 'http://' + match;
// //       }
// //       // Add http:// for URLs ending with .com
// //       if (match.endsWith('.com') && !match.startsWith('http://') && !match.startsWith('https://')) {
// //         href = 'http://' + match;
// //       }

// //       return `<a href="${href}" target="_blank">${match}</a>`;
// //     })
// //   );
// // }

// checkUrl(value: string): boolean {
//   return (
//     value.includes('http://') ||
//     value.includes('https://') ||
//     value.includes('www.') ||
//     value.includes('.com')
//   );
// }

// extractUrlParts(text: string): { start: number; end: number } {
//   const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([^\s]+\.com[^\s]*)/g;
//   const match = text.match(urlRegex);

//   if (match && match.index !== undefined) {
//     return { start: match.index, end: match.index + match[0].length };
//   }
//   return { start: 0, end: 0 };
// }

// replaceUrlWithLink(text: string): any {
//   const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([^\s]+\.com[^\s]*)/g;
//   return this.sanitizer.bypassSecurityTrustHtml(
//     text.replace(urlRegex, (match) => {
//       let href = match;

//       // Add http:// for www URLs
//       if (match.startsWith('www.') && !match.startsWith('http://') && !match.startsWith('https://')) {
//         href = 'http://' + match;
//       }
//       // Add http:// for URLs containing .com
//       if (match.includes('.com') && !match.startsWith('http://') && !match.startsWith('https://')) {
//         href = 'http://' + match;
//       }

//       return `<a href="${href}" target="_blank">${match}</a>`;
//     })
//   );
// }

 
//   info: info = new info();
//   getTicketInfo() {
//     this.ticketService.getInfo(this.id).then(
//       (data: any) => {
//         this.commonService.hideLoader();
//         if (data.data) {
//           this.info = data.data;
//           this.isReporter = this.globals.authData.id == this.info.created_by;
//           this.isReviewer = this.globals.authData.role_id == this.info.role_id;
//           this.isAdmin = this.globals.isAdmin || this.globals.isItAdmin;
//           this.dataLoaded = true;
//           console.log(this.isReviewer);
//           if ((this.isReviewer) && (this.info.status_id == '1' || this.info.status_id == '5')) {
//             console.log(this.info.status_id);

//             this.actionForm.status_id = '2';
//             this.takeAction();
//           } else {
//             this.getHistory();
//           }
//           this.filterDropDownValues();
//         } else {
//           this.commonService.showCommonErrorNotification(
//             'Ticket #' + this.id + ' not found in the record!'
//           );
//           this.router.navigate(['/tickets']);
//         }
//       },
//       (error) => {
//         this.commonService.hideLoader();
//       }
//     );
//   }

//   history: actions[] = [];

//   getHistory() {
//     this.commonService.showLoader();
//     this.ticketService.getHistory(this.id).then(
//       (data: any) => {
//         this.history = data.data;
//         if (this.isReporter) {
//           this.history = this.history.filter((e) => {
//             return e.action_history.some(obj => obj.type_id == 3 && obj.is_for_internal_purpose == 0);
//           })
//           console.log(this.history);
//         }
//         this.commonService.hideLoader();
//       },
//       (error) => {
//         this.commonService.hideLoader();
//       }
//     );
//   }

//   actionType: 1 | 2 | 3 = 1;
//   showTakeAction: boolean = false;
//   actionForm: actionForm = new actionForm();
//   actionTitle: string = 'Take Action';

//   openTakeAction(type: 1 | 2 | 3) { // 1 - For Committee, 2 - Add Note, 3 - Reopen with Note
//     this.actionType = type;
//     this.showTakeAction = true;
//     this.actionForm = new actionForm();
//     switch (this.actionType) {
//       case 1:
//         this.actionTitle = 'Take Action';
//         break;
//       case 2:
//         this.actionTitle = 'Respond';
//         if (this.info.status_id == '3') {
//           this.actionForm.status_id = '2';
//         }
//         break;
//       case 3:
//         this.actionTitle = 'Reopen Ticket';
//         this.actionForm.status_id = '5';
//         break;
//     }
//   }

//   takeAction(checkValid: boolean = false) {
//     if (this.isFormValid() || checkValid) {
//       const fdv = this.actionForm;
//       var fd = new FormData();
//       fd.append('id', this.id ? this.id : '');
//       fd.append('status_id', fdv.status_id ? fdv.status_id : '');
//       fd.append('assignee_id', fdv.assignee_id ? fdv.assignee_id.toString() : '');
//       fd.append('note', fdv.note ? fdv.note : '');
//       fd.append('is_for_internal_purpose', (fdv.is_for_internal_purpose) ? '1' : '0');
//       if (fdv.attachment) {
//         for (const file of fdv.attachment) {
//           fd.append('files[]', file, file.name);
//         }
//       }
//       this.commonService.showLoader();
//       this.ticketService.takeAction(this.id, fd).then(
//         (data: any) => {
//           this.showTakeAction = false;
//           this.getTicketInfo();
//         },
//         (error) => {
//           this.commonService.hideLoader();
//         }
//       );
//     }
//   }
//   cancelTicket() {
//     Swal.fire({
//       title: 'Cancel Ticket?',
//       text:
//         'Are you sure you want to cancel this ticket?',
//       showDenyButton: true,
//       confirmButtonText: 'Yes, Cancel it!',
//       denyButtonText: 'No!',
//       reverseButtons: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         this.commonService.showLoader();
//         this.actionForm = new actionForm();
//         this.actionForm.status_id = '6';
//         this.takeAction(true);
//       }
//     });
//   }

//   // isFormValid(): boolean {
//   //   if (this.actionForm.status_id === '3') {
//   //     return false; // If status_id is '3', return false to disable the submit button.
//   //   }

//   //   if (
//   //     this.actionForm.status_id ||
//   //     this.actionForm.assignee_id ||
//   //     (this.actionForm.note && this.actionForm.note.length > 0) ||
//   //     this.actionForm.attachment
//   //   ) {
//   //     return true; // If any other conditions are met, return true to enable the submit button.
//   //   } else {
//   //     return false; // Otherwise, return false to disable the submit button.
//   //   }
//   // }



//   isFormValid(): boolean {
//     const status = this.actionForm.status_id;
//     if (
//       (status == '2' && this.info.status_id != '3') ||
//       (this.info.status_id == '3' && status == '2' && this.actionForm.note && this.actionForm.note.length > 0) ||
//       (status == '5' && this.actionForm.note && this.actionForm.note.length > 0) ||
//       (status != '2' && status != '5' && (this.actionForm.status_id || this.actionForm.assignee_id || (this.actionForm.note && this.actionForm.note.length > 0) || this.actionForm.attachment))
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // FormValid(): boolean {
//   //   if ((this.actionForm.status_id && ((this.actionForm.status_id == '3' || this.actionForm.assignee_id) || (this.actionForm.note && this.actionForm.note.length > 0) || this.actionForm.attachment))) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // }



//   ddRolesLoader: boolean = false;
//   ddRoles: ddInterface[] = [];
//   ddRolesFiltered: ddInterface[] = [];
//   ddRolesDefaultItem = {
//     id: null,
//     name: 'Select a Assignee',
//   };
//   ddFilterRoles(searchText: string) {
//     this.ddRolesFiltered = this.ddRoles.filter(
//       (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//     );
//   }
//   getAssigneeRoles() {
//     this.ddRolesLoader = true;
//     this.ticketService.getAssigneeRoles().then(
//       (data: any) => {
//         this.ddRoles = data['data'];
//         this.ddRolesFiltered = data['data'];
//         this.filterDropDownValues();
//         this.ddRolesLoader = false;
//       },
//       (error) => {
//         this.ddRolesLoader = false;
//       }
//     );
//   }

//   ddStatusLoader: boolean = false;
//   ddStatus: ddInterface[] = [];
//   ddStatusFiltered: ddInterface[] = [];
//   ddStatusDefaultItem = {
//     id: null,
//     name: 'Select a Status',
//   };
//   ddFilterStatus(searchText: string) {
//     this.ddStatusFiltered = this.ddStatus.filter(
//       (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//     );
//   }
//   getStatusList() {
//     this.ddStatusLoader = true;
//     this.ticketService.getStatusList().then(
//       (data: any) => {
//         this.ddStatus = data['data'];
//         this.ddStatusFiltered = data['data'];
//         this.filterDropDownValues();
//         this.ddStatusLoader = false;
//       },
//       (error) => {
//         this.ddStatusLoader = false;
//       }
//     );
//   }

//   filterDropDownValues() {
//     if (this.info) {
//       if (this.info.status_id == '3') {
//         this.ddStatus = this.ddStatus.filter(e => {
//           return e.id != '3';
//         })
//         this.ddStatusFiltered = this.ddStatus;
//       }
//       this.ddRoles = this.ddRoles.filter(e => {
//         return e.id != this.info.role_id;
//       })
//       this.ddRolesFiltered = this.ddRoles;
//     }
//   }

//   getActionBy(a: actions) {
//     if (a.created_by == this.globals.authData.id) {
//       return 'Me';
//     } else if (this.isReporter && a.created_by != this.globals.authData.id) {
//       return 'Reviewer';
//     } else if (!this.isReporter && this.info.created_by == a.created_by) {
//       return 'Reporter';
//     } else if (this.isAdmin) {
//       return a.user_role + ' (' + a.created_by_name + ')';
//     } else {
//       return a.user_role;
//     }
//   }

//   isReopenEligible() {
//     if (this.info.updated_at) {
//       var today = new Date();
//       today.setHours(0, 0, 0, 0)
//       var updated_at = new Date(this.info.updated_at);
//       var updated_at = this.commonService.addDays(updated_at, 4);
//       updated_at.setHours(0, 0, 0, 0)
//       return today <= updated_at;
//     } else {
//       return false;
//     }
//   }

//   public noteMaxLength = 5000;
// }

// export class info {
//   id: string | null = null;
//   status_id: string | null = null;
//   status_name: string | null = null;
//   role_id: number | null = null;
//   role_name: string | null = null;
//   request_type_name: string | null = null;
//   request_topic_name: string | null = null;
//   request_sub_topic_name: string | null = null;
//   summary: string | null = null;
//   description: string | null = null;
//   created_by: string | null = null;
//   created_by_name: string | null = null;
//   created_at: string | null = null;
//   updated_by: string | null = null;
//   updated_by_name: string | null = null;
//   updated_at: string | null = null;
//   path: string | null = null;
//   file_name: string | null = null;
// }

// export class actions {
//   id: number | null = null;
//   ticket_id: string | null = null;
//   created_by: string | null = null;
//   created_by_name: string | null = null;
//   created_by_role: number | null = null;
//   user_role: string | null = null;
//   created_at: string | null = null;
//   action_history: actionDetail[] = []
// }

// export class actionDetail {
//   id: number | null = null;
//   ticket_action_id: number | null = null;
//   type_id: number | null = null;
//   value: string | null = null;
//   value_name: string | null = null;
//   is_for_internal_purpose: 0 | 1 = 0;
//   action_attachment: actionAttachment = new actionAttachment();
// }

// export class actionAttachment {
//   path: string | null = null;
//   file_name: string | null = null;
// }

// export class actionForm {
//   status_id: string | null = null;
//   assignee_id: number | null = null;
//   note: string | null = null;
//   attachment: File[] | null = null;
//   is_for_internal_purpose: 0 | 1 = 0;
// }

// export interface ddInterface {
//   id: string | number;
//   name: string;
// }
}
