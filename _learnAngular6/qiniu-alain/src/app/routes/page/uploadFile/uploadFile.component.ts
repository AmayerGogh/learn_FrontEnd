import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { UpService } from '../../../services/up.service';


@Component({
  selector: 'uploadFile',
  templateUrl: './uploadFile.component.html',
  styles:[
      './uploadFile.component.less'
  ]
})
export class uploadFileComponent implements OnInit {
     posturl ="localhost:62114/apis/qiniu/uploadFile"
     @Input() attachmentList;
     @Input() title;
     @Input() type;
     @Input() loadMsg;
     @Input() visible;
     url;
     fileList = [];
    ngOnInit(): void {
       
    }
   
    constructor(private msg: NzMessageService,private upService:UpService) {}
    // tslint:disable-next-line:typedef
    handleChange({ file, fileList }): void {
      const status = file.status;
      if (status !== 'uploading') {
        console.log(file, fileList);
      }
      if (status === 'done') {
        this.msg.success(`${file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.msg.error(`${file.name} file upload failed.`);
      }

    }
    // 上传文件
    handleUpload = (eve) => {
         this.visible = true;
         this.loadMsg = "正在上传...";
         const formData = new FormData();
         formData.append('file', eve.file);


         this.upService.upfile2(formData )                
            .subscribe((event: any) => {
            // this.visible = false;
            if (event.body.code == '1') {
                this.msg.success('文件上传成功！')
            
                const newQuesAttr = {
                    "attachmentId": event.body.data.attachmentId,
                    "name": event.body.data.name,
                    "isdelete": "0",
                    "url": event.body.data.url,
                    "attachmentInfo": {
                        "filename": event.body.data.name,
                        "url": event.body.data.url
                    }
                };
                 this.attachmentList.push(newQuesAttr);
                 eve.onSuccess(this.fileList[this.fileList.length - 1])
            }
        }, (err) => {
         this.visible = false;
            this.msg.error('文件上传失败！');
        });











    }

}


