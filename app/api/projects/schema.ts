import { z } from "zod";

const schema = z.object({
    "author": z.string(),
    "width": z.number(),
    "height": z.number(),
    "url": z.string()
});

export default schema