import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Xabi',
    favoritos: [
      {
        id: 1,
        nombre: 'LoL',
      },
      {
        id: 2,
        nombre: 'CoD',
      },
    ],
  };
  guardar() {
    console.log('formulario posteado');
  }

  eliminar(i: number) {
    this.persona.favoritos.splice(i, 1);
  }
  agregarJuego() {
    this.persona.favoritos.push({
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    });

    this.nuevoJuego = '';
  }
}
