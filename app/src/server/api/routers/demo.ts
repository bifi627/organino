import { z } from "zod";
import { Demo } from "~/database/models/demo";
import {
    createTRPCRouter,
    publicProcedure
} from "~/server/api/trpc";

export const demoRouter = createTRPCRouter({
    test: publicProcedure
        .input(z.object({ name: z.string() }))
        .mutation(async ({ input }) => {
            console.log(input);
            const data = await Demo.create({ name: input.name });
            console.log(data);
            return {
                id: data.id as string,
            };
        }),
});
