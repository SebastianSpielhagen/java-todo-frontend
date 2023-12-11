// Todo.ts

export interface Todo {
    id: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "DONE";
}