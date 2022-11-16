import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {

  produits : Produit[] | undefined; //un tableau de Produit
  produit: any;
  constructor(private router :Router,
    private produitService: ProduitService) { }
  
  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
  }
    
supprimerProduit(p: Produit)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.produitService.supprimerProduit(this.produit.idProduit).subscribe(() => {
  console.log("produit supprimé");
  this.SuprimerProduitDuTableau(p);
  });
  }
SuprimerProduitDuTableau(prod : Produit) {
  this.produit.forEach((cur: { idProduit: number | undefined; }, index: number) => {
  if(prod.idProduit=== cur.idProduit) {
  this.produit.splice(index, 1);
    }
    });
    }

}

