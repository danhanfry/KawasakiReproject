import {BasePage} from "../../shared/BasePage";
import {FileReader} from "../../shared/FileReader";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import {Image} from "ui/image";
import {topmost} from "ui/frame";

import {IResearchPage, IResearchLink, IResearchPageLink} from "../../models/IKawiInterfaces";

let vm = new Observable();
let page;

class ResearchPage extends BasePage {

    loaded = (args:EventData) => {
        vm.set("selectedPage", "research");
        page = <Page>args.object;  
        this.getResearchToolData();   
        page.bindingContext = vm;
    }

    private getResearchToolData = ():void => {
        
        let myLayout = page.getViewById("toolsRepeaterId");

        FileReader.ReadJSON("/data/researchdata.json")
            .then(function(response:IResearchPage){
                //console.log(JSON.stringify(response));

                //console.log(JSON.stringify(response.ResearchPage));
                myLayout.bindingContext = {
                    researchToolsData: response.ResearchPage
                };

            }, function(error){
                console.log(JSON.stringify(error));
            });
    }

}
export = new ResearchPage();