import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  pokemonDetails:any
  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.pokemonDetails = this.api.pokemonDetails
    console.log(this.pokemonDetails);
  }
  return = () => {
    this.router.navigate(['/'])
  }
}
