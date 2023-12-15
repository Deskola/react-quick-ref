import create from "./http-service";

export interface Post{
    id: number;
    title: string;
    body: string;
}

export default create('/posts');
