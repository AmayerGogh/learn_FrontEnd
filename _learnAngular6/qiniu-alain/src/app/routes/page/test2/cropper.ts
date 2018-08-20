//let plup= require("../../../../assets/common/js/plupload-2.1.9.full.min.js")
//require("../../../../assets/common/js/jquery-2.0.3.min.js")
import  "../../../../assets/common/js/jquery-2.0.3.min.js";
import  "../../../../assets/common/js/cropper.js"

//jquery("").html();
//console.log($("body").html());
declare var jquery,$:any; 
declare var cropper:any;


export class CropperHelper{      

      // get():any{    
      //       return $("#pictureWrapper").html();
      // } 
      
      init():void{
            new CropAvatar($('#avatar-form'));
            
      }
      setAspectRatio(t:Number) {   
            if (t==0) {
                  t == null;
            }
            $('#avatar-modal .avatar-wrapper .cropper-hidden').cropper('setAspectRatio', t);
      }
      getCanvas(){

      }
      //$img.cropper(data.method, data.option);
      getCanvasData(){            
            var data = $('#avatar-modal .avatar-wrapper .cropper-hidden').cropper("getCanvasData")
            console.log(data)
      }
      getImageData(){            
            var data = $('#avatar-modal .avatar-wrapper .cropper-hidden').cropper("getImageData")
            console.log(data)
      }
      getCropBoxData(){            
            var data = $('#avatar-modal .avatar-wrapper .cropper-hidden').cropper("getCropBoxData")
            console.log(data)
      }
      getCroppedCanvas():string{
           var $imgData = $('#avatar-modal .avatar-wrapper .cropper-hidden').cropper("getCroppedCanvas")
           return $imgData.toDataURL('image/png');
      }
     
      //没用
      setCroppedCanvas(){                       
            var data ={
                  "left": $('#avatar-preview_x').val(), 
                  "top": $('#avatar-preview_y').val(),
                  "width": $('#avatar-preview_width').val(),
                  "height": $('#avatar-preview_height').val()
                  }
            console.log(data) 
            $('#avatar-modal .avatar-wrapper .cropper-hidden').cropper("setCropBoxData",data)
      }


}


function CropAvatar($element) {			
      this.$avatarForm = $element;
      
      this.$avatarView = this.$avatarForm.find('.avatar-view');
      this.$avatar = this.$avatarView.find('img');
      this.$avatarUpload = this.$avatarForm.find('.avatar-upload');
      this.$avatarSrc = this.$avatarForm.find('.avatar-src');
     // this.$avatarData = this.$avatarForm.find('.avatar-data');
      this.$avatarInput = this.$avatarForm.find('.avatar-input');
      this.$avatarSave = this.$avatarForm.find('.avatar-save');
      this.$avatarBtns = this.$avatarForm.find('.avatar-btns');

      this.$avatarWrapper = this.$avatarForm.find('.avatar-wrapper');
      this.$avatarPreview = this.$avatarForm.find('.avatar-preview');
    
      this.$submit=this.$avatarForm.find('#submit')
      this.$avatarSet =this.$avatarForm.find(".avatar-set") 
      this.init();
}

CropAvatar.prototype = {
      constructor: CropAvatar,
      support: {
            fileList: !!$('<input type="file">').prop('files'),
            blobURLs: !!window.URL && URL.createObjectURL,
            formData: !!FormData
      },

      init: function() {
            this.support.datauri = this.support.fileList && this.support.blobURLs;

            if(!this.support.formData) {
                  this.initIframe();
            }

            //this.initTooltip();
            //this.initModal();
            this.addListener();
      },

      addListener: function() {
            this.$avatarView.on('click', $.proxy(this.click, this));
            this.$avatarInput.on('change', $.proxy(this.change, this));
            this.$submit.on('click', $.proxy(this.submit, this));
            this.$avatarBtns.on('click', $.proxy(this.rotate, this));
            this.$avatarSet.on('blur', $.proxy(this.blur, this))

           console.log(this.$avatarSet)
      },

      // initTooltip: function() {
      // 	this.$avatarView.tooltip({
      // 		placement: 'bottom'
      // 	});
      // },

      // initModal: function() {
      
      // },

// 		initPreview: function() {
// 			var url = this.$avatar.attr('src');

// //			this.$avatarPreview.empty().html('<img src="' + url + '">');
// 		},

      initIframe: function() {
            var target = 'upload-iframe-' + (new Date()).getTime(),
                  $iframe = $('<iframe>').attr({
                        name: target,
                        src: ''
                  }),
                  _this = this;

            // Ready ifrmae
            $iframe.one('load', function() {

                  // respond response
                  $iframe.on('load', function() {
                        var data;

                        try {
                              data = $(this).contents().find('body').text();
                        } catch(e) {
                              console.log(e.message);
                        }

                        if(data) {
                              try {
                                    data = $.parseJSON(data);
                              } catch(e) {
                                    console.log(e.message);
                              }

                              _this.submitDone(data);
                        } else {
                              _this.submitFail('Image upload failed!');
                        }

                        _this.submitEnd();

                  });
            });

            this.$iframe = $iframe;
            this.$avatarForm.attr('target', target).after($iframe.hide());
      },

      click: function() {
            var url = this.$avatar.attr('src');
            console.log("click"+url);
            //this.$avatarPreview.empty().html('<img src="' + url + '">');
            //this.initPreview();
      },

      change: function() {
            var files,
                  file;

            if(this.support.datauri) {
                  files = this.$avatarInput.prop('files');

                  if(files.length > 0) {
                        file = files[0];

                        if(this.isImageFile(file)) {
                              if(this.url) {
                                    URL.revokeObjectURL(this.url); // Revoke the old one
                              }

                              this.url = URL.createObjectURL(file);
                              this.startCropper();
                        }
                  }
            } else {
                  file = this.$avatarInput.val();

                  if(this.isImageFile(file)) {
                        this.syncUpload();
                  }
            }
      },

      submit: function() {
            
            var $imgData= this.$img.cropper("getCroppedCanvas");
            var dataurl = $imgData.toDataURL('image/png');  //dataurl便是base64图片
            $("#Avatar_Img").attr("src",dataurl)

            // 修改原来的提交方式
            // if(!this.$avatarSrc.val() && !this.$avatarInput.val()) {
            //       return false;
            // }

            // if(this.support.formData) {
            //       this.ajaxUpload();
            //       return false;
            // }
      },

      rotate: function(e) {
            var data;

            if(this.active) {
                  data = $(e.target).data();

                  if(data.method) {
                        this.$img.cropper(data.method, data.option);
                  }
            }
      },

      isImageFile: function(file) {
            if(file.type) {
                  return /^image\/\w+$/.test(file.type);
            } else {
                  return /\.(jpg|jpeg|png|gif)$/.test(file);
            }
      },

      startCropper: function() {
            var _this = this;

            if(this.active) {
                  this.$img.cropper('replace', this.url);
            } else {
                this.$img = $('<img src="' + this.url + '">');
                  console.log(this.url);
                  this.$avatarWrapper.empty().html(this.$img);
                  this.$img.cropper({                        
                        preview: this.$avatarPreview.selector,
                        strict: false,
                        crop: function(data) {
                              //console.log(data);
                              // var json = [
                              //       '{"x":' + data.x,
                              //       '"y":' + data.y,
                              //       '"height":' + data.height,
                              //       '"width":' + data.width,
                              //       '"rotate":' + data.rotate + '}'
                              // ].join();
                              //_this.$avatarData.val(json);
                              //不能提前声明
                            
                              $('#avatar-preview_x').val(data.x.toFixed(2));
                              $('#avatar-preview_y').val(data.y.toFixed(2));
                              $('#avatar-preview_height').val(data.height.toFixed(2));
                              $('#avatar-preview_width').val(data.width.toFixed(2));
                              
                        }
                  });

                  this.active = true;
                
            }
      },
      //无效
      blur:function(){
            var data ={
                  "left": $('#avatar-preview_x').val(), 
                  "top": $('#avatar-preview_y').val(),
                  "width": $('#avatar-preview_width').val(),
                  "height": $('#avatar-preview_height').val()
             }                   
            this.$img.cropper('setCropBoxData', {
                  "left": $('#avatar-preview_x').val(),
                  "top": $('#avatar-preview_y').val(), 
                  "width": $('#avatar-preview_width').val(), 
                  "height": $('#avatar-preview_height').val()
            });
      },
      stopCropper: function() {
            if(this.active) {
                  this.$img.cropper('destroy');
                  this.$img.remove();
                  this.active = false;
            }
      },

      ajaxUpload: function() {
            var url = "http://localhost:62114/api/qiniu",
                  data = new FormData(this.$avatarForm[0]),
                  _this = this;

            $.ajax(url, {
                  headers: {
                        //'X-XSRF-TOKEN':'*'
                  },
                  type: 'post',
                  data: data,
                  dataType: 'json',
                  processData: false,
                  contentType: false,

                  beforeSend: function() {
                        _this.submitStart();
                  },

                  success: function(data) {
                        _this.submitDone(data);
                  },

                  error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert("error")
                        if (this.uploaded) {
                            this.uploaded = false;
                            this.cropDone(); 
                            // this.uploaded = true;this.support.datauri ||           
                            // this.$avatarSrc.val(this.url);            
                            // this.startCropper();         
                         } else {           
                             this.uploaded = true;            
                             this.$avatarSrc.val(this.url);           
                             this.startCropper();            
                             this.cropDone();          
                        }
                  },

                  complete: function() {
                        _this.submitEnd();
                  }
            });
      },

      syncUpload: function() {
            this.$avatarSave.click();
      },

      submitStart: function() {
            //this.$loading.fadeIn();
      },

		submitDone: function(data) {
			// if($.isPlainObject(data)) {
			// 	if(data.result) {
			// 		this.url = data.result;
			// 		if(this.support.datauri || this.uploaded) {
			// 			this.uploaded = false;
			// 			this.cropDone();
			// 		} else {
			// 			this.uploaded = true;
			// 			this.$avatarSrc.val(this.url);
			// 			this.startCropper();
			// 		}
			// 		this.$avatarInput.val('');
			// 	} else if(data.message) {
			// 		this.alert(data.message);
			// 	}
			// } else {
			// 	this.alert('Failed to response');
                  // }
                  alert(1);
		},

      submitFail: function(msg) {
            this.alert(msg);
      },

      submitEnd: function() {
            //this.$loading.fadeOut();
      },

      cropDone: function() {
            this.$avatarForm.get(0).reset();
            this.$avatar.attr('src', this.url);
            this.stopCropper();
            
      },

      alert: function(msg) {
            var $alert = [
                  '<div class="alert alert-danger avater-alert">',
                  '<button type="button" class="close" data-dismiss="alert">&times;</button>',
                  msg,
                  '</div>'
            ].join('');

            this.$avatarUpload.after($alert);
      },
     
};