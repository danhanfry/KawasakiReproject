import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import {Image} from "ui/image";
import {topmost} from "ui/frame";

let vm = new Observable();

class HomePage extends BasePage {

    loaded(args:EventData){
        vm.set("selectedPage", "home");
        vm.set("text", "This is the home page");
        let page = <Page>args.object;     
        page.bindingContext = vm;
    }

    gotoslidetwo = function() {
        vm.set("selectedPage", "settings");
        topmost().navigate("pages/settings/settings");
    }

}
export = new HomePage();