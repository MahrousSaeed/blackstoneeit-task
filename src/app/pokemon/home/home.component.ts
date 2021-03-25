import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonId
  details:any
  constructor(private api:ApiService,private router:Router,private toastr: ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }
  submitForm(){
    this.spinner.show();
    this.api.getPokemon(this.pokemonId).subscribe(res => {
      // console.log('res',res);
      this.details = res
      this.api.pokemonDetails = res
      if(this.details.name && this.details.base_experience){
        this.toastr.success('', 'success');
        this.router.navigate(['/details'])
      } else {
        this.toastr.error('', 'the Pokemon name or dose not found please try again with another id  ');
      }
      
      this.spinner.hide();
    },(err)=> {
      console.log('err',err);
      this.toastr.error('', err.error+ ' please change this id' );
      this.spinner.hide();
    })
    
  }
}
