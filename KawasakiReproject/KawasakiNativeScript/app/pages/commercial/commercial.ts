import {BasePage} from "../../shared/BasePage";
import {Common} from "../../shared/Common";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import {Image} from "ui/image";
import {topmost} from "ui/frame";

let vm = new Observable();

class Commercial extends BasePage {

    loaded = (args:EventData) => {
        vm.set("selectedPage", "commercial");
        vm.set("text", "This is the home page");
        let page = <Page>args.object;     
        page.bindingContext = vm;
    }

    gotoslidetwo = ():void => {
        vm.set("selectedPage", "vtr");
        topmost().navigate("pages/vtr/vtr");
    }

}
export = new Commercial();