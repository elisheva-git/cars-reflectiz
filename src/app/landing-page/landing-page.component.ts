/// <reference types="@types/googlemaps" />‏
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _service: CarsService, public zone: NgZone) {

  }

  ngOnInit(): void {
    //increase in one the count visitors and keep in localstorage
    let countFromLocalStorage: number = localStorage.getItem('countVisitors') != null ? Number(localStorage.getItem('countVisitors')) : 0
    localStorage.setItem('countVisitors', String(Number(countFromLocalStorage + 1)))
    this.hobbies = this._service.getHobbies()
  }

  hobbies: string[] = []
  location_?:string
  ownerDetailsForm: FormGroup = new FormGroup({
    fullName: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    birthDate: new FormControl([Validators.required]),
    hobbies: new FormControl([]),
    color: new FormControl("", [Validators.required]),
    amountSeats: new FormControl([Validators.required]),
    motorType: new FormControl("", [Validators.required]),
  })

  sendDetails(): void {
    if (!this.ownerDetailsForm.valid) {
      this.openSnackBar("fill all the fileds")
    }
    else {
      //if the post request ended successfully
      if (this._service.postCarDetails(this.ownerDetailsForm.value)) {
        this.ownerDetailsForm.reset()
        this.ownerDetailsForm.markAsUntouched()
        this.openSnackBar("your request was sent and a mail with your match will be sent to you:)")
      }
      else {
        this.openSnackBar("Oops your a fault happend:( please try again")
      }
    }
  }

  formatLabel(value: number) {
    return value;
  }

  openSnackBar(message: string, action: string = "x") {
    this._snackBar.open(message, action, {
      duration: 6000
    });
  }

  //find location with autocomplete by googel maps
  @ViewChild('addresstext') addresstext: any;
  getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
      {
        types: ["geocode"]
      });
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.ownerDetailsForm.value.location=place.formatted_address
        console.log(this.ownerDetailsForm.value.location)
    });
  }

}