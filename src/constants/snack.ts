import {makeVar} from "@apollo/client";

export const snackVar = makeVar<string | undefined>(undefined);