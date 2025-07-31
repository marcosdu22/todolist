import { createContext, ReactNode, useState } from "react";

export type Post = {
  id: number;
  title: string;
  body: string;
};

type PostContextType = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
