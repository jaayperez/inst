export type articleType = {
  id?: string;
  title?: string;
  description?: string;
  slug?: string;
  status?: string;
};

export type articlesType = [articleType] | [] | undefined;
