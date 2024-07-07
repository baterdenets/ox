import { useQuery } from "../utils";

export const useConfigQuery = (page: number = 1) => useQuery(`config.get`);
