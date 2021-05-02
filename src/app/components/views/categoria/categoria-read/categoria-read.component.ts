import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';


@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: [ './categoria-read.component.css'
  ]
})
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[] = []

  displayedColumns : String[] = [ 'id' , 'nome' , 'descricao', 'livros' , 'acoes' ];
  dataSource = new MatTableDataSource<Categoria>(this.categorias);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.categorias = resposta;
      this.dataSource = new MatTableDataSource<Categoria>(this.categorias);
      this.dataSource.paginator = this.paginator;
    })
  }
 

  navegarParaCategoriaCreate(): void {
    this.router.navigate(["categorias/create"])
  }
}


