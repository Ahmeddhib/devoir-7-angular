import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import{ Produit } from '../model/produit.model'
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: []
})
export class UpdateProduitComponent implements OnInit {
[x: string]: any;
currentProduit =new Produit();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private produitService: ProduitService) { }

  ngOnInit(){
    //console.log(this.route.snapshot.params.id);
    this.produitService.consulterProdui(this.activatedRoute.snapshot.params['id']).subscribe( prod =>{ this.currentProduit = prod; } ) ;
    
    
{ //console.log(this.currentProduit);
this.produitService.updateProduit(this.currentProduit);
}
console.log(this.activatedRoute);
  }
  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }
}

