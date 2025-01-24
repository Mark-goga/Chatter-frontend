import {makeVar, ReactiveVar} from "@apollo/client";

const authenticatedVar: ReactiveVar<boolean> = makeVar(false);

export default authenticatedVar;