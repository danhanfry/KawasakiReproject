import {BasePage} from "../../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import {ObservableArray} from "data/observable-array"
import { Page, ShownModallyData } from "ui/page";

let page;
var context: any;
var closeCallback: Function;

let guidelineRulesArray:ObservableArray<string> = new ObservableArray<string>();

class SubmissionGuidelines extends BasePage {

    loaded = (args:EventData) => {
        page = <Page>args.object;

        guidelineRulesArray.push("Please wear a helmet and proper rider attire when in motion");
        guidelineRulesArray.push("Please do not allow anyone without a motorcycle license to operate the vehicle");
        guidelineRulesArray.push("Please ride on paved roads. The Ninja® 650 is not designed for off-road use");
        guidelineRulesArray.push("Never ride under the influence of drugs or alcohol");
        guidelineRulesArray.push("Please keep both hands on the handlebars and focus on the road");
        guidelineRulesArray.push("Please make sure operators are able to reach all vehicle controls");
        guidelineRulesArray.push("If you ride with a passenger, please make sure they wear proper helmets and motorcycle riding attire");
        guidelineRulesArray.push("Please make sure to read and follow the Ninja 650 Owners Manual");

        let myLayout = page.getViewById("rulesListViewId");
         myLayout.bindingContext = {
            socialRulesArray: guidelineRulesArray
        };
    }

    onShownModally = (args: ShownModallyData):void => {
        context = args.context;
        closeCallback = args.closeCallback;
    }

    closeGuidelineModal = ():void => {
        closeCallback();
    }

}
export = new SubmissionGuidelines();