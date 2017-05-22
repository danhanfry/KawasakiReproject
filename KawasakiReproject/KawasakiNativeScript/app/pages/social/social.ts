import {BasePage} from "../../shared/BasePage";
import {Common} from "../../shared/Common";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import {Image} from "ui/image";
import {topmost} from "ui/frame";

let vm = new Observable();
let page;

class SocialPage extends BasePage {

    loaded = (args:EventData) => {
        page = <Page>args.object;   
        vm.set("selectedPage", "social");
        this.socialFeedRetrieval();  
        page.bindingContext = vm;
    }

    private socialFeedRetrieval = ():void => {


        let myLayout = page.getViewById("socialRepeaterId");

        fetch("http://app.feedspear.com/Campaign/16/Feed").then(response => { return response.json(); }).then(function (r) {

            var allSocial = Common.spreadfasterNormalizer(r).slice(0, 5);

            myLayout.bindingContext = {
                socialTiles: allSocial
            };
        });
    }

    gotoslidethree = () => {
        vm.set("selectedPage", "settings");
        topmost().navigate("pages/settings/settings");
    }

}
export = new SocialPage();