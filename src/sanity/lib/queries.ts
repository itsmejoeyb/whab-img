import { defineQuery } from "next-sanity";

export const query = defineQuery('*[_type == "property"]{address, gallery}');
