import { makeVar } from "@apollo/client";

import { getPageMeta } from "src/util";

export const PAGE_META_DATA = makeVar(getPageMeta("/"));
