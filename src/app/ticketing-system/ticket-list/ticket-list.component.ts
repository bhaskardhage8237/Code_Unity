import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
//   constructor(
//     protected globals: Globals,
//     private ticketService: AppTicketingSystemService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private commonService: CommonService
//   ) { }

//   isApplicant: boolean = false;
//   isReviewer: boolean = false;

//   ngOnInit() {
//     console.log('this.isApplicant');
//     this.isApplicant = this.globals.currentLink.split('/')[1] == 'tickets';
//     console.log(this.isApplicant);
//     this.getAll();
//     this.loadGridData();
//   }

//   ticket_list: any[] = [];
//   public multiple = false;
//   public allowUnsort = false;
//   public skip = 0;

//   // Grid
//   gridData: GridDataResult = { data: [], total: 0 };
//   gridLoading: boolean = false;
//   sort: SortDescriptor[] = [
//     {
//       field: 'days_to_close',
//       dir: 'asc',
//     },
//   ];

//   onPageChange(state: PageChangeEvent): void {
//     this.gridSkip = state.skip;
//     this.gridPageSize = state.take;
//     this.loadGridData();
//   }

//   sortChange(sort: SortDescriptor[]): void {
//     this.sort = sort;
//     this.loadGridData();
//   }

//   pageSizes = this.globals.pageSizes;
//   gridPageSize: number = this.globals.defaultPageSize;
//   gridSkip: number = 0;
//   gridSearchableFields: string[] = [
//     'id',
//     'request_type_name',
//     'request_topic_name',
//     'request_sub_topic_name',
//     'summary',
//     'status_name',
//   ];

//   gridSearchPlaceholder: string =
//     'Search with Number, Type, Topic, Subtopic, Summary and Status';
//   searchText: string = '';
//   searchFilters: { field: string; operator: string; value: string }[] = [];
//   public selectableSettings: SelectableSettings = {
//     checkboxOnly: true,
//     mode: 'multiple',
//   };

//   getAll() {
//     this.commonService.showLoader();
//     this.ticketService.getAll().then(
//       (data: any) => {
//         this.commonService.hideLoader();
//         this.ticket_list = data.data.records;
//         var that = this;
//         this.ticket_list = this.ticket_list.filter((item) => {
//           return (that.isApplicant
//             ? item.created_by == that.globals.authData.id
//             : item.created_by != that.globals.authData.id)
//         })
//         this.dd_R_Type = data.data.filters.request_type;
//         this.dd_Topic = data.data.filters.topic;
//         this.dd_Sub_Topic = data.data.filters.sub_topic;
//         this.dd_Status = data.data.filters.status;
//         this.loadGridData();
//         console.log(this.ticket_list);
//       },
//       (error) => {
//         this.commonService.hideLoader();
//       }
//     );
//   }

//   filteredTicketList: any[] = [];
//   filteredData: any = [];
//   gridPages: number = 0;

//   filterTicketsByCondition() {
//     const authUserId = this.globals.authData.id;
//     const advancedFilteredData = this.getAdvancedFilteredData();
//     const searchFilters: { field: string; operator: string; value: string }[] =
//       [];

//     if (this.searchText.length > 0) {
//       this.gridSearchableFields.forEach((field) => {
//         searchFilters.push({
//           field: field,
//           operator: 'contains',
//           value: this.searchText,
//         });
//       });

//       this.filteredTicketList = advancedFilteredData.filter((ticket: any) => {
//         if (ticket.created_by === authUserId) {
//           return false;
//         }

//         for (const filter of searchFilters) {
//           if (
//             ticket[filter.field] &&
//             String(ticket[filter.field])
//               .toLowerCase()
//               .includes(filter.value.toLowerCase())
//           ) {
//             return true;
//           }
//         }
//         return false;
//       });
//     } else {
//       this.filteredTicketList = advancedFilteredData.filter(
//         (ticket: any) => ticket.created_by !== authUserId
//       );
//     }
//   }

//   loadGridData() {
//     this.filterTicketsByCondition();
//     this.filteredData = this.getFilteredData();
//     console.log(this.filteredData);
//     this.gridData = {
//       data: orderBy(this.filteredData, this.sort).slice(
//         this.gridSkip,
//         this.gridSkip + this.gridPageSize
//       ),
//       total: this.filteredData.length,
//     };
//     console.log(this.gridData);
//     this.gridPages = Math.ceil(this.gridData.total / this.gridPageSize);
//   }

//   getFilteredTickets() {
//     return this.ticket_list;
//   }

//   getFilteredData() {
//     var advancedFilteredData = this.getAdvancedFilteredData();
//     console.log(advancedFilteredData);
//     if (this.searchText.length > 0) {
//       var searchFilters: { field: string; operator: string; value: string }[] =
//         [];
//       this.gridSearchableFields.forEach((field) => {
//         searchFilters.push({
//           field: field,
//           operator: 'contains',
//           value: this.searchText,
//         });
//       });
//       return advancedFilteredData.filter((ticket: any) => {
//         for (const filter of searchFilters) {
//           if (
//             ticket[filter.field] &&
//             String(ticket[filter.field])
//               .toLowerCase()
//               .includes(filter.value.toLowerCase())
//           ) {
//             return true;
//           }
//         }
//         return false;
//       });
//     } else {
//       return advancedFilteredData;
//     }
//   }

//   //advance filter
//   advFilter: defaultAdvancedFilter = new defaultAdvancedFilter();
//   advFilterProp: advFilterProp = new advFilterProp();

//   getAdvancedFilteredData() {
//     var advFilter = this.advFilter;
//     this.setAdvancedFilterProp();
//     var that = this;
//     return this.ticket_list.filter(function (item: any) {
//       return (
//         //Request Type
//         (advFilter.type.length > 0
//           ? item.request_type_id
//             ? advFilter.type.some((value) => {
//               return item.request_type_id == value.id;
//             })
//             : false
//           : true) &&
//         //Topic
//         (advFilter.topic.length > 0
//           ? item.request_topic_id
//             ? advFilter.topic.some((value) => {
//               return item.request_topic_id == value.id;
//             })
//             : false
//           : true) &&
//         //Sub-Topic
//         (advFilter.Sub_Topic.length > 0
//           ? item.request_topic_id
//             ? advFilter.Sub_Topic.some((value) => {
//               return item.request_sub_topic_id == value.id;
//             })
//             : false
//           : true) &&
//         //Status
//         (advFilter.status.length > 0
//           ? item.status_id
//             ? advFilter.status.some((value) => {
//               return item.status_id == value.id;
//             })
//             : false
//           : true)
//       );
//     });
//   }

//   setAdvancedFilterProp() {
//     var defaultFilter: defaultAdvancedFilter = new defaultAdvancedFilter();
//     var defaultFilterProp: advFilterProp = new advFilterProp();

//     // type
//     if (this.advFilter.type.length == 0) {
//       this.advFilterProp.type = defaultFilterProp.type;
//     } else {
//       this.advFilterProp.type.filtered = true;
//       this.advFilterProp.type.value = this.advFilter.type;
//     }

//     // topic
//     if (this.advFilter.topic.length == 0) {
//       this.advFilterProp.topic = defaultFilterProp.topic;
//     } else {
//       this.advFilterProp.topic.filtered = true;
//       this.advFilterProp.topic.value = this.advFilter.topic;
//     }

//     // Sub_Topic
//     if (this.advFilter.Sub_Topic.length == 0) {
//       this.advFilterProp.Sub_Topic = defaultFilterProp.Sub_Topic;
//     } else {
//       this.advFilterProp.Sub_Topic.filtered = true;
//       this.advFilterProp.Sub_Topic.value = this.advFilter.Sub_Topic;
//     }

//     // status
//     if (this.advFilter.status.length == 0) {
//       this.advFilterProp.status = defaultFilterProp.status;
//     } else {
//       this.advFilterProp.status.filtered = true;
//       this.advFilterProp.status.value = this.advFilter.status;
//     }
//   }

//   resetAdvanceFilter(
//     filter: string | null = null,
//     index: number | null = null
//   ) {
//     this.resetPage();
//     var defaultFilter: defaultAdvancedFilter = new defaultAdvancedFilter();
//     switch (filter) {
//       case 'type':
//         if (index != null) {
//           this.advFilter.type.splice(index, 1);
//         } else {
//           this.advFilter.type = defaultFilter.type;
//         }
//         break;
//       case 'topic':
//         if (index != null) {
//           this.advFilter.topic.splice(index, 1);
//         } else {
//           this.advFilter.topic = defaultFilter.topic;
//         }
//         break;
//       case 'Sub_Topic':
//         if (index != null) {
//           this.advFilter.Sub_Topic.splice(index, 1);
//         } else {
//           this.advFilter.Sub_Topic = defaultFilter.Sub_Topic;
//         }
//         break;
//       case 'status':
//         if (index != null) {
//           this.advFilter.status.splice(index, 1);
//         } else {
//           this.advFilter.status = defaultFilter.status;
//         }
//         break;
//       case null:
//         this.advFilter = defaultFilter;
//         break;
//     }
//     this.loadGridData();
//   }

//   isAdvanceFiltered() {
//     var c = 0;
//     Object.entries(this.advFilterProp).forEach(([key, value]) => {
//       if (value.filtered) {
//         c++;
//       }
//     });
//     return c > 0;
//   }

//   isArray(val: any) {
//     return Array.isArray(val);
//   }

//   ddTypeLoader: boolean = false;
//   dd_R_Type: ddInterface[] = [];
//   ddStatusFiltered: ddInterface[] = [];
//   ddFilterRequest(searchText: string) {
//     this.ddStatusFiltered = this.dd_R_Type.filter(
//       (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//     );
//   }

//   dd_Topic: ddInterface[] = [];
//   ddTopicFiltered: ddInterface[] = [];
//   ddFilterTopic(searchText: string) {
//     this.ddTopicFiltered = this.dd_Topic.filter(
//       (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//     );
//   }

//   dd_Sub_Topic: ddInterface[] = [];
//   ddSubTopicFiltered: ddInterface[] = [];
//   ddFilterSubTopic(searchText: string) {
//     this.ddSubTopicFiltered = this.dd_Sub_Topic.filter(
//       (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//     );
//   }

//   ddStatusLoader: boolean = false;
//   dd_Status: ddInterface[] = [];
//   ddStstusFiltered: ddInterface[] = [];
//   ddFilterStatus(searchText: string) {
//     this.ddStstusFiltered = this.dd_Status.filter(
//       (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//     );
//   }

//   gridCurrentPage: number = 1;
//   resetPage() {
//     this.gridSkip = 0;
//     this.gridCurrentPage = 1;
//     this.gridPageSize = 5;
//   }
// }
// export class TicketData {
//   status_id: string | number | undefined;
//   ticket_id: string | number | undefined;
// }
// export interface ddInterface {
//   id: string | null | number;
//   name: string;
// }

// export interface dd_Interface {
//   id: string | null;
//   name: string;
// }
// export interface dd__Interface {
//   id: string | null;
//   name: string;
// }
// export class defaultAdvancedFilte {
//   status: '0' | '1' | '2' = '2';
// }
// export class defaultAdvancedFilter {
//   type: ddInterface[] = [];
//   topic: ddInterface[] = [];
//   Sub_Topic: ddInterface[] = [];
//   status: ddInterface[] = [];
// }
// export class advFilterProp {
//   type: filterProp = {
//     label: 'Type',
//     filtered: false,
//     value: [],
//   };
//   topic: filterProp = {
//     label: 'Topic',
//     filtered: false,
//     value: [],
//   };
//   Sub_Topic: filterProp = {
//     label: 'Sub Topic',
//     filtered: false,
//     value: [],
//   };
//   status: filterProp = {
//     label: 'Status',
//     filtered: false,
//     value: [],
//   };
// }
// export interface filterProp {
//   label: string;
//   filtered: boolean;
//   value: any;
// }

}