import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  nome: string = ''
  pessoas: any[] = []
  pessoasFiltradas: any[] = []

  constructor() {
    this.pessoas = [
      { id: 1, idade: 10, nome: 'Felipe' },
      { id: 2, idade: 11, nome: 'Avila' },
      { id: 3, idade: 12, nome: 'Gustavo' },
      { id: 4, idade: 13, nome: 'Pedro' },
      { id: 5, idade: 14, nome: 'Victor' },
      { id: 6, idade: 15, nome: 'Gabriel' },
    ]

    this.pessoasFiltradas = this.pessoas
  }

  ngOnInit() {
  }

  filtrarPorItens(e: any) {
    this.nome = e.target.value.toLowerCase();
    console.log(this.nome)
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome: string) {
    this.pessoasFiltradas = this.pessoas
    return this.pessoasFiltradas.filter((item) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase())
    })
  }
}
