import { Database } from "./database";

export type Note = Database["public"]["Tables"]["notes"]["Row"];

export type CreateNotePayload = Database["public"]["Tables"]["notes"]["Insert"];
export type CreateNoteResponse = Database["public"]["Tables"]["notes"]["Row"];

export type UpdateNotePayload = Database["public"]["Tables"]["notes"]["Update"];
export type UpdateNoteResponse = CreateNoteResponse;

export type DeleteNotePayload = Database["public"]["Tables"]["notes"];
