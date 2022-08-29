import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import {environment} from "../../environments/environment";


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'http://localhost:8080/realms/SAT',
            redirectUrl: environment.oidc.redirectUri,
            postLogoutRedirectUri: environment.oidc.postLogoutRedirectUri,
            clientId: environment.oidc.clientId,
            usePushedAuthorisationRequests: true,
            scope: environment.oidc.scope,
            responseType: environment.oidc.responseType,
            silentRenew: true,
            useRefreshToken: true,
            ignoreNonceAfterRefresh: true,
            customParamsAuthRequest: {
              prompt: 'consent', // login, consent
            },
    }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
