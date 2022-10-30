import { z } from 'zod'

const State = z.object({
  contracts: z.record(z.string(), z.object({
    name: z.string(),
    transaction: z.string(),
    timestamp: z.number()
  })),
  canEvolve: z.boolean(),
  evolve: z.string()
})

const Action = z.object({
  input: z.any(),
  caller: z.string()
})

const Res = z.object({
  state: State.optional(),
  result: z.any().optional()
})

type State = z.infer<typeof State>
type Action = z.infer<typeof Action>
type Res = z.infer<typeof Res>

export async function handle (state : State, action : Action) : Promise<Res> {

}