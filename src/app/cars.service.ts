import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

    //save the new optional buyer details
    postCarDetails(ownerDetails: object): boolean {
        try {
            if (localStorage.getItem("potentialBuyers")) {
                let objBuyers = JSON.parse(String(localStorage.getItem("potentialBuyers")))
                objBuyers.push(ownerDetails)
                localStorage.setItem("potentialBuyers", JSON.stringify(objBuyers))
            }
            else {
                let arr = [ownerDetails]
                localStorage.setItem("potentialBuyers", JSON.stringify(arr))
            }
            return true
        } catch (error) {
            return false
        }
    }
    //list of hobbies to choose
    hobbies:string[]=[
        "reading"
        ,"writing"
        ,"painting"
        ,"swimming"
        ,"singing"
        ,"dancing"
        ,"playing"
        ,"cycling"
        ,"hiking"
        ,"running"
        ,"playing soccer"
        ,"playing tennis"
        ,"playing golf"
        ,"exercising"
        ,"playing computer games"
        ,"playing board games"
        ,"cooking"
        ,"baking"
        ,"photography"
        ,"fishing"
        ,"surfing"
        ,"skydiving"
        ,"bungee jumping"
        ,"roller skating"
        ,"skateboarding"
        ,"gardening"
        ,"blogging"
        ,"learning languages"
        ,"making crafts"
        ,"knitting"
        ,"sewing"
        ,"drawing"
      ]
    getHobbies():string[]{
        return this.hobbies 
    }
}