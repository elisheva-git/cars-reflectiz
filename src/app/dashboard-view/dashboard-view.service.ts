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
            let arr = [{"fullName":"david Cohen","gender":"male","email":"david@Cohen","birthDate":"2006-10-09T22:00:00.000Z","hobbies":["painting","swimming","singing","hiking"],"color":"#f82525","amountSeats":4,"motorType":"electric","location":"מודיעין עילית"},{"fullName":"Sara Levi","gender":"female","email":"aa@aa","birthDate":"2006-10-10T22:00:00.000Z","hobbies":["painting","swimming","cooking"],"color":"#639cbf","amountSeats":4,"motorType":"electric","location":"אשוויל, צפון קרוליינה, ארצות הברית"},{"fullName":"noam sharon","gender":"male","email":"bb@bb","birthDate":"2016-06-06T21:00:00.000Z","hobbies":["swimming","singing","playing computer games"],"color":"#b7b927","amountSeats":3,"motorType":"fuel","location":"Deen Dayal Nagar, Gwalior, Madhya Pradesh, הודו"},{"fullName":"tamar tal","gender":"female","email":"e0533169098@gmail.com","birthDate":"2019-11-19T22:00:00.000Z","hobbies":["painting","baking"],"color":"#c14fc9","amountSeats":4,"motorType":"electric","location":"ירושלים, ישראל"},{"fullName":"noa hai","gender":"female","email":"dd@ss","birthDate":"2017-01-31T22:00:00.000Z","hobbies":["swimming","singing","dancing"],"color":"#0b1228","amountSeats":3,"motorType":"fuel","location":"תל אביב יפו, ישראל"},{"fullName":"Lea bar","gender":"female","email":"dd@ss","birthDate":"2017-01-31T22:00:00.000Z","hobbies":["swimming","playing golf","cooking"],"color":"#d0b949","amountSeats":4,"motorType":"electric","location":"תל אביב יפו, ישראל"}]
            localStorage.setItem("potentialBuyers", JSON.stringify(arr))
            localStorage.setItem('countVisitors', "15")
            this.PotentialBuyers = this.getPotentialBuyersDetails()
        }
    }

    //return the data of potential buyers details(from localstorage)
    getPotentialBuyersDetails(): Array<object> {
        return JSON.parse(String(localStorage.getItem("potentialBuyers")))
    }

    // function to get the division to motortype Relative to gender
    getEngineTypeByGender(): engineTypeByGender {
        const engineTypeByGenderObj: engineTypeByGender = new engineTypeByGender
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
        const visitorsCount: number = Number(localStorage.getItem("countVisitors"))
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
        const countPerHobby: Map<string, number> = new Map()
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