import { Injectable } from '@angular/core';

export class engineTypeByGender {
    fuelMale: number = 0;
    electricMale: number = 0;
    fuelFemale: number = 0;
    electricFemale: number = 0;
}
@Injectable()
export class DashboardViewService {

    PotentialBuyers: Array<any> = []
    constructor() {
        this.PotentialBuyers = this.getPotentialBuyersDetails()
        if (!this.PotentialBuyers) {
            this.PotentialBuyers = []
        }
    }

    //return the data of potential buyers details(from localstorage)
    getPotentialBuyersDetails(): Array<object> {
        return JSON.parse(String(localStorage.getItem("potentialBuyers")))
    }

    // function to get the division to motortype Relative to gender
    getEngineTypeByGender(): engineTypeByGender {
        let engineTypeByGenderObj: engineTypeByGender = new engineTypeByGender
        this.PotentialBuyers.forEach(p => {
            if (p.gender == "male") {
                if (p.motorType == "electric") {
                    engineTypeByGenderObj.electricMale += 1
                }
                else {
                    engineTypeByGenderObj.fuelMale += 1
                }
            } else {
                if (p.motorType == "electric") {
                    engineTypeByGenderObj.electricFemale += 1
                }
                else {
                    engineTypeByGenderObj.fuelFemale += 1
                }
            }
        })
        return engineTypeByGenderObj
    }

    //return amount of the total visitors to the landing page and amount visitors that filled the forum successfully
    getVisitorsAndRegisterionCount(): [number, number] {
        let visitorsCount: number = Number(localStorage.getItem("countVisitors"))
        return [visitorsCount, this.PotentialBuyers.length]
    }

    //this function calculate the avarage of required amount of seats by year of birth 
    getAvgAmountSeatsByYear(): number[] {
        let seatsByYear: number[] = Array(new Date().getFullYear() - 2000 + 1).fill(0)
        let countByYear: number[] = Array(new Date().getFullYear() - 2000 + 1).fill(0)
        this.PotentialBuyers.forEach(p => {
            seatsByYear[new Date(p.birthDate).getFullYear() - 2000] += p.amountSeats
            countByYear[new Date(p.birthDate).getFullYear() - 2000] += 1
        })
        console.log(seatsByYear)
        console.log(countByYear)
        seatsByYear.forEach((s, index) => {
            seatsByYear[index] = seatsByYear[index] / countByYear[index]
        })
        return seatsByYear
    }

    //return how many visitors chose each hobby
    getCountPerHobbey(): Map<string, number> {
        let countPerHobby: Map<string, number> = new Map()
        let count: any
        this.PotentialBuyers.forEach(p => {
            p.hobbies.forEach((hobby: string) => {
                count = countPerHobby.get(hobby) != undefined ? countPerHobby.get(hobby) : 0
                countPerHobby.set(hobby, count + 1)
            });
        })
        return countPerHobby
    }
}