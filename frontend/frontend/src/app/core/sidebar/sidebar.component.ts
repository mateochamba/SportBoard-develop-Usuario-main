import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [RouterModule, SharedModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

    isSidebarOpen = true;

    constructor(private router: Router) {}
    
    toggleSidebar(sidenav: any) {
        sidenav.toggle();
    }

    navigateToCrearUsuario() {
        this.router.navigate(['/usuarios/crear-usuario']);
    }
    navigateToGestionUsuario() {
        this.router.navigate(['/usuarios/gestion-usuario']);
    }
    navigateToEditarUsuario() {
        this.router.navigate(['/usuarios/editar-usuario']);
    }

}