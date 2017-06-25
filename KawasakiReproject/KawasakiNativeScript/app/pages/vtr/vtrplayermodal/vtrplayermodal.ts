import {BasePage} from "../../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page, ShownModallyData } from "ui/page";
import { WebView } from "tns-core-modules/ui/web-view";

let page;
var context: any;
let vtrVideoId:string = "1";
var closeCallback: Function;

class VTRPlayerModal extends BasePage {

    onShownModally = (args: ShownModallyData):void => {

       page = <Page>args.object;
        context = args.context;
        vtrVideoId = args.context.videoId;
        closeCallback = args.closeCallback;
        this.setupVTRVideoPlayer();
    }

    closeGuidelineModal = ():void => {
        closeCallback();
    }

    private setupVTRVideoPlayer = ():void => {
        let webViewVTR:WebView = page.getViewById("vtrWebViewId");
        webViewVTR.src = "http://kawasaki.com/ninja650experience/vtr/index.html?videoId=" + vtrVideoId;
    }

}
export = new VTRPlayerModal();