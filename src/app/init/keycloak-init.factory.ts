import { KeycloakService } from "keycloak-angular";
import {environment} from "../../environments/environment";


export function KeycloakInit (
  keycloak: KeycloakService
) {
  return () =>
    keycloak.init(
      {
        config: {
          url: 'http://localhost:8080',
          realm: 'SAT',
          clientId: 'DEMO'
        }
      }
    )
}

