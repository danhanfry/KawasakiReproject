import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";
import {topmost} from "ui/frame";
import { View } from 'ui/core/view';

import * as permissions from "nativescript-permissions";
import * as imageSourceModule from "image-source";
import { takePicture, requestPermissions }from "nativescript-camera";

declare var android;
let vm = new Observable();

class KCamera extends BasePage {

    loaded = (args:EventData):void => {
        vm.set("selectedPage", "camera");
        vm.set("cameraImage", "https://placehold.it/150x150");
        let page = <Page>args.object; 
        page.bindingContext = vm;

        if(!this.hasCameraPermission())
        {
            this.grantCameraPermission();
        }
    }

    tapAction = (args: EventData):void => {

        let page = <Page>args.object;
        
        takePicture()
            .then((imageAsset) => {
                let source = new imageSourceModule.ImageSource();
                source.fromAsset(imageAsset).then((source) => {
                    console.log(`Size: ${source.width}x${source.height}`);
                });

                vm.set("cameraImage", "https://img.clipartfest.com/180148656a42167cea2660a7705c919a_sample-facebook-linkedin-official-linkedin-clipart_1000-1000.png");
                let page = <Page>args.object; 
                page.bindingContext = vm;
                //page.bindingContext.set("cameraImage", "https://img.clipartfest.com/180148656a42167cea2660a7705c919a_sample-facebook-linkedin-official-linkedin-clipart_1000-1000.png");
            }, 
            (err) => {
                console.log("Error -> " + err.message);
            }
        );
    }

    private hasCameraPermission = ():boolean => {
        var cameraPermissionAllowed = permissions.hasPermission(android.Manifest.permission.CAMERA);
        var accessNetworkAllowed = permissions.hasPermission(android.Manifest.permission.ACCESS_NETWORK_STATE);
        return cameraPermissionAllowed && accessNetworkAllowed;
    }

    private grantCameraPermission = ():void => {
        permissions.requestPermissions([android.Manifest.permission.CAMERA,
                                        android.Manifest.permission.ACCESS_NETWORK_STATE], 
                                        "App Needs The Following permissions")
            .then(()=>{
                console.log("Camera Permission Granted !");
               
            })
            .catch(()=>{
                console.log("Camera Permission Denied !");
            });
    }

}

export = new KCamera();