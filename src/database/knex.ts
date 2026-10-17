import { knex  as knesConfig } from "knex"
import config from  "../knexfile"

export const knex = knesConfig(config)