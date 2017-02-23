import { Router } from '@angular/router';
// app/auth.service.ts

import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth0Service {
    // Configure Auth0
    lock = new Auth0Lock('XpA5pUL1JW31RJp9bMWkmqOVI70ZDtYz', 'rogeriocardoso.auth0.com', {});

    constructor(private router: Router) {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);

            // Fetch profile information
            this.lock.getProfile(authResult.idToken, (error, profile) => {                
                localStorage.setItem('_profile', JSON.stringify(profile));
                this.router.navigate(['privado/privado-home']);
            });
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    }

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    }

}