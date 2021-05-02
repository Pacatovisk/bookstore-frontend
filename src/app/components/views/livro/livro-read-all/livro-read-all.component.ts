import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css'
  ]
})
export class LivroReadAllComponent implements OnInit {

  id_cat: String = ''
  
  livros: Livro[] = []

  displayedColumns : String[] = [ 'id' , 'titulo' , 'livros', 'acoes' ];
  dataSource = new MatTableDataSource<Livro>(this.livros);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

 

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {  
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.findAll()
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.livros = resposta;
      this.dataSource = new MatTableDataSource<Livro>(this.livros);
      this.dataSource.paginator = this.paginator;
    })
  }

  navegarParaCriarLivro(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros/create`])
  }

}
