import * as Scrivito from "scrivito";
import { visitorLoggedInWithGoogle } from "./LoginWithGoogle";
var config = {
  tenant: process.env.SCRIVITO_TENANT,
  visitorAuthentication: visitorLoggedInWithGoogle,
};

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SnCRIVITO_ORIGIN;
}

Scrivito.configure(config);