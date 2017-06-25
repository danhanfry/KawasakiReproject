import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import {Image} from "ui/image";
import {topmost} from "ui/frame";

let vm = new Observable();
let page:Page;

class VTRPage extends BasePage {

    loaded = (args:EventData) => {
        vm.set("selectedPage", "vtr");
        page = <Page>args.object;     
        page.bindingContext = vm;
    }

    gotoslidethree = () => {
        vm.set("selectedPage", "settings");
        topmost().navigate("pages/settings/settings");
    }

    vtrinteractive = () => {
        var context = {
            videoId: 1
        };

        page.showModal("pages/vtr/vtrplayermodal/vtrplayermodal", context, function () {}, true);
    }

    vtrfreeride = () => {
       var context = {
            videoId: 0
        };

        page.showModal("pages/vtr/vtrplayermodal/vtrplayermodal", context, function () {}, true);
    }

}
export = new VTRPage();