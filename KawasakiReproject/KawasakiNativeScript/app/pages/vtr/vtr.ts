import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import {Image} from "ui/image";
import {topmost} from "ui/frame";

let vm = new Observable();

class VTRPage extends BasePage {

    loaded = (args:EventData) => {
        vm.set("selectedPage", "vtr");
        let page = <Page>args.object;     
        page.bindingContext = vm;
    }

    gotoslidethree = () => {
        vm.set("selectedPage", "settings");
        topmost().navigate("pages/settings/settings");
    }

}
export = new VTRPage();