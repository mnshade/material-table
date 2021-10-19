import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'AppComponent',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  displayedColumns: string[] = ['codigo', 'nome', 'genero', 'duracao'];
  dataSource = new MatTableDataSource(DataFilmes);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

export interface ListaFilmes {
  codigo: number;
  nome: string;
  genero: string;
  duracao: string;
}

const DataFilmes: ListaFilmes[] = [
  {
    codigo: 1,
    nome: 'O Poderoso Chefão',
    genero: 'Policial',
    duracao: '2h 55min',
  },
  {
    codigo: 2,
    nome: 'A Lista de Schindler',
    genero: 'Histórico',
    duracao: '3h 15min',
  },
  {
    codigo: 3,
    nome: 'Um Sonho de Liberdade.',
    genero: 'Drama',
    duracao: '2h 20min',
  },
  { codigo: 4, nome: 'O Rei Leão', genero: 'Aventura', duracao: '1h 29min' },
  {
    codigo: 5,
    nome: 'Forrest Gump, O Contador de Histórias',
    genero: 'Drama',
    duracao: '1h 42min',
  },
  {
    codigo: 6,
    nome: 'O Senhor dos Anéis, O Retorno do Rei',
    genero: 'Aventura',
    duracao: '2h 10min',
  },
  {
    codigo: 7,
    nome: 'À Espera de um Milagre',
    genero: 'Drama',
    duracao: '1h 20min',
  },
  {
    codigo: 8,
    nome: 'O Poderoso Chefão',
    genero: 'Policial',
    duracao: '2h 55min',
  },
  {
    codigo: 9,
    nome: 'A Lista de Schindler',
    genero: 'Histórico',
    duracao: '3h 15min',
  },
  {
    codigo: 10,
    nome: 'Um Sonho de Liberdade.',
    genero: 'Drama',
    duracao: '2h 20min',
  },
  { codigo: 11, nome: 'O Rei Leão', genero: 'Aventura', duracao: '1h 29min' },
  {
    codigo: 12,
    nome: 'Forrest Gump, O Contador de Histórias',
    genero: 'Drama',
    duracao: '1h 42min',
  },
  {
    codigo: 13,
    nome: 'O Senhor dos Anéis, O Retorno do Rei',
    genero: 'Aventura',
    duracao: '2h 10min',
  },
  {
    codigo: 15,
    nome: 'À Espera de um Milagre',
    genero: 'Drama',
    duracao: '1h 20min',
  },
  {
    codigo: 16,
    nome: 'O Poderoso Chefão',
    genero: 'Policial',
    duracao: '2h 55min',
  },
  {
    codigo: 17,
    nome: 'A Lista de Schindler',
    genero: 'Histórico',
    duracao: '3h 15min',
  },
  {
    codigo: 18,
    nome: 'Um Sonho de Liberdade.',
    genero: 'Drama',
    duracao: '2h 20min',
  },
  { codigo: 19, nome: 'O Rei Leão', genero: 'Aventura', duracao: '1h 29min' },
  {
    codigo: 20,
    nome: 'Forrest Gump, O Contador de Histórias',
    genero: 'Drama',
    duracao: '1h 42min',
  },
  {
    codigo: 21,
    nome: 'O Senhor dos Anéis, O Retorno do Rei',
    genero: 'Aventura',
    duracao: '2h 10min',
  },
  {
    codigo: 22,
    nome: 'À Espera de um Milagre',
    genero: 'Drama',
    duracao: '1h 20min',
  },
  {
    codigo: 23,
    nome: 'O Poderoso Chefão',
    genero: 'Policial',
    duracao: '2h 55min',
  },
  {
    codigo: 24,
    nome: 'A Lista de Schindler',
    genero: 'Histórico',
    duracao: '3h 15min',
  },
  {
    codigo: 25,
    nome: 'Um Sonho de Liberdade.',
    genero: 'Drama',
    duracao: '2h 20min',
  },
  { codigo: 26, nome: 'O Rei Leão', genero: 'Aventura', duracao: '1h 29min' },
  {
    codigo: 27,
    nome: 'Forrest Gump, O Contador de Histórias',
    genero: 'Drama',
    duracao: '1h 42min',
  },
  {
    codigo: 28,
    nome: 'O Senhor dos Anéis, O Retorno do Rei',
    genero: 'Aventura',
    duracao: '2h 10min',
  },
  {
    codigo: 29,
    nome: 'À Espera de um Milagre',
    genero: 'Drama',
    duracao: '1h 20min',
  },
  {
    codigo: 30,
    nome: 'O Poderoso Chefão',
    genero: 'Policial',
    duracao: '2h 55min',
  },
  {
    codigo: 31,
    nome: 'A Lista de Schindler',
    genero: 'Histórico',
    duracao: '3h 15min',
  },
  {
    codigo: 32,
    nome: 'Um Sonho de Liberdade.',
    genero: 'Drama',
    duracao: '2h 20min',
  },
  { codigo: 33, nome: 'O Rei Leão', genero: 'Aventura', duracao: '1h 29min' },
  {
    codigo: 34,
    nome: 'Forrest Gump, O Contador de Histórias',
    genero: 'Drama',
    duracao: '1h 42min',
  },
  {
    codigo: 35,
    nome: 'O Senhor dos Anéis, O Retorno do Rei',
    genero: 'Aventura',
    duracao: '2h 10min',
  },
];
