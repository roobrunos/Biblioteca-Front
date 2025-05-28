import { Routes } from '@angular/router';
import { LivroComponent } from './livro/livro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'livro', pathMatch: 'full' },
  { path: 'livro', component: LivroComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'emprestimo', component: EmprestimoComponent }
];
