import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import {FileReader} from "../../shared/FileReader";
import { Page } from "ui/page";
import { StackLayout } from "ui/layouts/stack-layout";
import { GridLayout } from "ui/layouts/grid-layout";

import {IExplorePage, IExploreTiles } from "../../models/IKawiInterfaces";

let vm = new Observable();
let page:Page;

class ExplorePage extends BasePage {

    loaded = (args:EventData) => {
        vm.set("selectedPage", "explore");
        page = <Page>args.object; 
        this.getExploreTileData();   
        page.bindingContext = vm;
    }

    openexploretiles = (args:EventData):void => {
        var context = {
            tileUid: args.object["data-name"]
        };

        page.showModal("pages/explore/modaltiles/modal-tile", context, function () {}, true);
    }

    private getExploreTileData = ():void => {
        
        let myLayout = page.getViewById("exploreRepeaterId");

        FileReader.ReadJSON("/data/exploredata.json")
            .then((response:IExplorePage) => {

                myLayout.bindingContext = {
                    exploreTiles: response.Tiles
                };

            }, (error) => {
                console.log(JSON.stringify(error));
            });
    }

    private setTilesToGridView = (tiles:IExploreTiles[]):void => {

        let exploreRepeaterId:GridLayout = <GridLayout>page.getViewById("exploreRepeaterId");

        tiles.forEach((tile: IExploreTiles) => {

            var currentStackLayout = new StackLayout();
            currentStackLayout.backgroundImage = tile.ImagePath;
            currentStackLayout.set("data-tech", tile.Name);
            currentStackLayout.className= "non-tech-image " + tile.ClassName;
            
            exploreRepeaterId.addChild(currentStackLayout);
        });
    }

}
export = new ExplorePage();