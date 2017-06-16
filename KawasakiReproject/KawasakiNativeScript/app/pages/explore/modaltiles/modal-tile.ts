import {BasePage} from "../../../shared/BasePage";
import { Page, ShownModallyData } from "ui/page";
import * as builder from "ui/builder";
import {FileReader} from "../../../shared/FileReader";
import {IExplorePage, IExploreTiles } from "../../../models/IKawiInterfaces";
import {Enumberable} from "../../../shared/Enumerable";

let page;
var context: any;
let uidTile:string = "styling";
var closeCallback: Function;

class ModalTiles extends BasePage {

    onShownModally = (args: ShownModallyData):void => {
        page = <Page>args.object;
        context = args.context;
        uidTile = args.context.tileUid;
        this.getExploreTileData();
        closeCallback = args.closeCallback;
    }

    closeGuidelineModal = ():void => {
        closeCallback();
    }

     private getExploreTileData = ():void => {

        FileReader.ReadJSON("/data/exploredata.json")
            .then((response:IExplorePage) => {

                let myLayout = page.getViewById("scrollModalId");

                var enumerableTiles = new Enumberable<IExploreTiles>(response.Tiles);
                var foundTiles = enumerableTiles.Where(x => x.Name == uidTile);
                if(foundTiles.Any())
                {

                   var explorePartialView = builder.load({
                        path: "~/pages/explore/partials",
                        name: foundTiles.FirstOrDefault().Name.toLowerCase(),
                        page: page
                    });

                    myLayout.addChild(explorePartialView);
                }

            }, (error) => {
                console.log(JSON.stringify(error));
            });
    } 

}
export = new ModalTiles();