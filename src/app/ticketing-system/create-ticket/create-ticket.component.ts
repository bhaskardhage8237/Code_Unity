import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {

  // constructor(
  //   private fb: FormBuilder,
  //   private http: HttpClient,
  //   protected globals: Globals,
  //   private commonService: CommonService,
  //   private validation: ValidationService,
  //   private router: Router,
  //   private ticketService: AppTicketingSystemService
  // ) { }

  // ngOnInit() {
  //   this.formSetup();
  //   this.getRequestTypeList();
  // }

  // id: string | number | null = 0;
  // public descriptionMaxLength = 5000;
  // public summaryMaxLength = 100;
  // ticketForm: any;
  // formValidators: any;
  // selectedActivity: any = null;
  // uploadError: boolean = false;
  // uploadError1: boolean = false;

  // validationMessages: any = {
  //   request_id: {
  //     required: 'Request type is required.',
  //   },
  //   request_topic_id: {
  //     required: 'Topic is required.',
  //   },
  //   request_sub_topic_id: {
  //     required: 'Sub Topic is required.',
  //   },
  //   summary: {
  //     required: 'Summery is required.',
  //   },
  //   description: {
  //     required: 'Description is required.',
  //   },
  // };

  // formErrors: any = {};
  // getFormErrors() {
  //   this.formErrors = this.validation.getValidationErrors(
  //     this.ticketForm,
  //     this.validationMessages
  //   );
  // }

  // formSetup() {
  //   this.formValidators = {
  //     request_id: Validators.compose([
  //       Validators.required,
  //     ]),
  //     request_topic_id: Validators.compose([
  //       Validators.required,
  //     ]),
  //     request_sub_topic_id: Validators.compose([
  //       Validators.required,
  //     ]),
  //     summary: Validators.compose([
  //       Validators.required,
  //     ]),
  //     description: Validators.compose([
  //       Validators.required,
  //     ]),
  //   };
  //   this.ticketForm = this.fb.group({
  //     request_id: [null, this.formValidators.request_id],
  //     request_topic_id: [null, this.formValidators.request_topic_id],
  //     request_sub_topic_id: [null, this.formValidators.request_sub_topic_id],
  //     summary: [null, this.formValidators.summary],
  //     description: [null, this.formValidators.description],
  //     attachment: [null],
  //   });
  //   this.ticketForm.valueChanges.subscribe(() => {
  //     this.getFormErrors();
  //   });
  // }

  // //Dropdowns
  // ddLoading: boolean = false;

  // // Request type
  // ddRequestTypeLoader: boolean = false;
  // ddRequestType: ddInterface[] = [];
  // ddRequestTypeFiltered: ddInterface[] = [];
  // ddRequestTypeDefaultItem = {
  //   id: null,
  //   name: 'Select a Request Type',
  // };
  // ddFilterRequestType(searchText: string) {
  //   this.ddRequestTypeFiltered = this.ddRequestType.filter(
  //     (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  //   );
  // }
  // getRequestTypeList() {
  //   this.ddLoading = true;
  //   this.commonService.showLoader();
  //   this.ticketForm.get('request_id')?.disable();
  //   this.ddRequestTypeLoader = true;
  //   this.ticketService.getTypeList().then(
  //     (data: any) => {
  //       this.ddRequestType = data.data;
  //       this.ddRequestTypeFiltered = this.ddRequestType;
  //       this.ddRequestTypeLoader = false;
  //       this.ticketForm.get('request_id')?.enable();
  //       this.ddLoading = false;
  //       this.commonService.hideLoader();
  //     },
  //     (error) => {
  //       this.ddRequestTypeLoader = false;
  //       this.ticketForm.get('request_id')?.enable();
  //     }
  //   );
  // }

  // //Request Topic
  // ddTopicLoader: boolean = false;
  // ddTopic: ddInterface[] = [];
  // ddTopicFiltered: ddInterface[] = [];
  // ddTopicDefaultItem = {
  //   value: null,
  //   name: 'Select a Activity Type',
  // };
  // ddFilterTopic(searchText: string) {
  //   this.ddTopicFiltered = this.ddTopic.filter(
  //     (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  //   );
  // }
  // getTopicList() {
  //   this.ddLoading = true;
  //   this.commonService.showLoader();
  //   const request_id = this.RequestId();
  //   this.ticketForm.get('request_topic_id')?.disable();
  //   this.ddTopicLoader = true;
  //   this.ticketService.getTopicList(request_id).then(
  //     (data: any) => {
  //       this.ddTopic = data.data;
  //       this.ddTopicFiltered = this.ddTopic;
  //       this.ddTopicLoader = false;
  //       this.ticketForm.get('request_topic_id')?.enable();
  //       if (this.ddTopic.length == 1) {
  //         this.ticketForm.get('request_topic_id').setValue(this.ddTopic[0].id);
  //         this.getSubTopicList();
  //       } else {
  //         this.ddLoading = false;
  //         this.commonService.hideLoader();
  //       }
  //     },
  //     (error) => {
  //       this.ddTopicLoader = false;
  //       this.ticketForm.get('request_topic_id')?.enable();
  //     }
  //   );
  // }

  // //Request Sub Topic
  // ddSubTopicLoader: boolean = false;
  // ddSubTopic: ddInterface[] = [];
  // ddSubTopicFiltered: ddInterface[] = [];
  // ddSubTopicDefaultItem = {
  //   value: null,
  //   name: 'Select a Activity Type',
  // };
  // ddFilterSubTopic(searchText: string) {
  //   this.ddTopicFiltered = this.ddTopic.filter(
  //     (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  //   );
  // }
  // getSubTopicList() {
  //   // const request_id = this.RequestId();
  //   this.ddLoading = true;
  //   this.commonService.showLoader();
  //   const request_topic_id = this.ticketForm.value.request_topic_id;
  //   this.ticketForm.get('request_sub_topic_id')?.disable();
  //   this.ddSubTopicLoader = true;
  //   this.ticketService.getSubTopicList(request_topic_id).then(
  //     (data: any) => {
  //       this.ddSubTopic = data.data;
  //       this.ddSubTopicFiltered = this.ddSubTopic;
  //       this.ddSubTopicLoader = false;
  //       this.ticketForm.get('request_sub_topic_id')?.enable();
  //       if (this.ddSubTopic.length == 1) {
  //         this.ticketForm.get('request_sub_topic_id').setValue(this.ddSubTopic[0].id);
  //       }
  //       this.ddLoading = false;
  //       this.commonService.hideLoader();
  //     },
  //     (error) => {
  //       this.ddSubTopicLoader = false;
  //       this.ticketForm.get('request_sub_topic_id')?.enable();
  //     }
  //   );
  // }

  // onFileSelect(event: any) {
  //   const file = event.files[0];

  //   if (file) {
  //     const allowedFileTypes = this.globals.allowedFileExt;
  //     const maxFileSize = this.globals.allowedImageSize; // 2 MB
  //     if (file.size <= maxFileSize) {
  //       const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
  //       if (allowedFileTypes.includes(fileExtension)) {
  //         this.uploadError = false;
  //         this.uploadError1 = false;
  //         this.ticketForm.patchValue({ attachment: file });
  //       } else {
  //         this.uploadError1 = true;
  //         this.uploadError = false;
  //       }
  //     } else {
  //       this.uploadError = true;
  //       this.uploadError1 = false;
  //     }
  //   }
  // }

  // removeSelectedFileMessage() {
  //   this.uploadError = false;
  //   this.uploadError1 = false;
  //   this.ticketForm.patchValue({ attachment: null });
  // }

  // topicChanged() {
  //   console.log('topicChanged');
  //   this.ticketForm.patchValue({
  //     request_sub_topic_id: null,
  //     summary: null,
  //     description: null,
  //     attachment: null,
  //   });
  //   this.ticketForm.controls['request_sub_topic_id'].reset();
  //   this.ticketForm.controls['summary'].reset();
  //   this.ticketForm.controls['description'].reset();
  //   this.removeSelectedFileMessage();
  //   if (this.ticketForm.value.request_id && this.ticketForm.controls.request_topic_id.value) {
  //     this.getSubTopicList();
  //   }
  // }
  // subTopicChanged() {
  //   this.ticketForm.patchValue({
  //     summary: null,
  //     description: null,
  //     attachment: null,
  //   });
  //   this.ticketForm.controls['summary'].reset();
  //   this.ticketForm.controls['description'].reset();
  //   this.removeSelectedFileMessage();
  // }

  // ddRequestTypeChange() {
  //   console.log('ddRequestTypeChange');
  //   this.ticketForm.patchValue({
  //     request_topic_id: null,
  //     request_sub_topic_id: null,
  //     summary: null,
  //     description: null,
  //   });
  //   this.removeSelectedFileMessage();
  //   this.ticketForm.markAsPristine();
  //   this.ticketForm.markAsUntouched();
  //   this.getFormErrors();
  //   if (this.ticketForm.value.request_id) {
  //     this.getTopicList();
  //   }
  // }

  // validate() {
  //   this.ticketForm.markAllAsTouched();
  //   if (this.ticketForm.valid && this.uploadError == false && this.uploadError1 == false) {
  //     this.commonService.showLoader();
  //     const fv = this.ticketForm.value;
  //     var fd = new FormData();
  //     fd.append('request_id', fv.request_id ? fv.request_id : '');
  //     fd.append('topic_id', fv.request_topic_id ? fv.request_topic_id : '');
  //     fd.append('request_sub_topic_id', fv.request_sub_topic_id ? fv.request_sub_topic_id : '');
  //     fd.append('summary', fv.summary ? fv.summary : '');
  //     fd.append('description', fv.description ? fv.description : '');

  //     if (fv.attachment) {
  //       for (const file of fv.attachment) {
  //         fd.append('files[]', file, file.name);
  //       }
  //     }


  //     if (this.id == 0) {
  //       this.ticketService.add(fd).then(
  //         (data: any) => {
  //           this.router.navigate(['/tickets']);
  //         },
  //         (error) => {
  //           this.commonService.hideLoader();
  //         })
  //     }
  //   }
  //   else {
  //     this.getFormErrors();
  //   }
  // }

  // RequestId() {
  //   return this.ticketForm.value.request_id;
  // }

  // TopicId() {
  //   return this.ticketForm.value.request_topic_id;
  // }

  // SubTopicId() {
  //   return this.ticketForm.value.request_sub_topic_id;
  // }

  // activityId() {
  //   return this.ticketForm.value.request_sub_topic_id;
  // }


}

export interface ddInterface {
  id: string | number | null;
  name: string;
}
