import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[] = [];

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error => console.log(error)
      );
  }
}
