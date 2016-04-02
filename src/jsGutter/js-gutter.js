/* global Firepad */
/* global Firebase */
/* global ace */
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
<<<<<<< HEAD
=======
import '../mode-javascript';
import '../theme-chrome';
>>>>>>> parent of 8e0a935... Merge pull request #57 from tlatoza/feature-30

@inject(EventAggregator)
export class JsGutter {
  
  constructor(eventAggregator) {
       this.eventAggregator = eventAggregator;
       this.selectedLine = 1;


  }
  
  attached() {

         this.subscribe();

  } 
  
 
  publish(e) {
   let ea = this.eventAggregator;
    
    let info = {

      top: e.target.scrollTop
    };
    
    ea.publish('onScrolled',info);
  }


  
  subscribe() {
    let ea = this.eventAggregator;
    let session = this.session;
<<<<<<< HEAD

    ea.subscribe('onEditorChangedd', payload => {
         


         // This been used to populate the guuter (stub)
    //   let c = ['Hello'];
    // this.setContentGutter(1 , c); 
    // this.setContentGutter(100 , c); 
    //   console.info('payload');
	  
    });

    ea.subscribe('onCursorMoved', info => {

                  let lastDiv = this.GetLastDiv();
                  let iframeBody = $('#gutter');
                  let line =  info.cursor;
                  let lastline = info.lastVisibleRow;
                 
                  if(iframeBody.find('#line'+lastline).length ==0){
                         this.CreateLine(lastline);
                    }
                    if(lastline < lastDiv){
                     this.RemoveLine(lastline, lastDiv);
                 }
                  
                   iframeBody.find("#line"+this.selectedLine).removeClass("highlight_gutter");
                   iframeBody.find("#line"+line).addClass("highlight_gutter");
                   this.selectedLine=line;


                   this.LastVisibleRow = info.lastVisibleRow;
                  
                  this.highlightLine(line, lastline);
                
                 //TODO: Fix gutter scrolling expereince 
                 
                 // iframeBody.scrollTop((info.cursor*4)+1);
    });
  }
  setContentGutter (line, content){
         let lastDiv = this.GetLastDiv();
         if(line > lastDiv){
                 throw ("Line "+line+" does not exist"+ "last visible line is "+ lastDiv);
           }
         let iframeBody = $('#gutter');
        for(let index of content.length){
        iframeBody.find("#line"+line).append(" [ "+content[index]+" ]");
        
        }
   }
   CreateLine(line){
      let iframeBody = $('#gutter');  
      let indexOfDiv = this.GetLastDiv();
      for(indexOfDiv ; indexOfDiv <=line; indexOfDiv++){ // possible bug
         iframeBody.append("<div id=line"+indexOfDiv+"></div>");
         iframeBody.find("#line"+indexOfDiv).addClass("line_height");
      }
   }
   GetLastDiv(){
        let iframeBody = $('#gutter');
        let indexOfDiv =1;   
          while(iframeBody.find('#line'+indexOfDiv).length !=0){
           indexOfDiv++;
         }
       return indexOfDiv;
      }
	  RemoveLine(lastline, lastDiv){
          let iframeBody = $('#gutter');  
          while (lastline<lastDiv){
            iframeBody.find('#line'+lastDiv).remove();
              lastDiv--;
         }
      }
	  highlightLine(line, lastline){
=======
    
    ea.subscribe('onEditorChanged', payload => {
      let doc = session.doc;
>>>>>>> parent of 8e0a935... Merge pull request #57 from tlatoza/feature-30
      
          let lastDiv = this.GetLastDiv();
          let iframeBody = $('#gutter');
          let selectedLine = this.selectedLine;
          if(iframeBody.find('#line'+lastline).length ==0){
                 this.CreateLine(lastline);
            }
            if(lastline < lastDiv){
             this.RemoveLine(lastline, lastDiv);
         }
          
           iframeBody.find("#line"+selectedLine).removeClass("highlight_gutter");
           iframeBody.find("#line"+line).addClass("highlight_gutter");
           this.selectedLine=line;
               

          
      }


     
      
      
}

