import { API_KEY } from "../utils/constants";
import { createClient } from "pexels";

export const client = createClient(API_KEY);
