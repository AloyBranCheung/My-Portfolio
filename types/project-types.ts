export interface CmsResponse<T extends unknown> {
  id: number;
  attributes: T;
}

interface CmsMeta {
  createdAt: string;
  updatedAt: string;
  published: string;
}

interface Project {
  projectTitle: string;
  projectDescription: string;
  githubUrl: string;
  deployUrl: string;
  techStack: string;
  order: string;
}

interface ImgSrcFormat {
  name: string;
  hash: string;
  ext: string;
  width: number;
  height: number;
  url: string;
}

export type OtherProjects = CmsMeta & Project;

export type FeaturedProjects = CmsMeta &
  Project & {
    imgSrc: {
      data: CmsResponse<{
        name: string;
        formats: {
          thumbnail: ImgSrcFormat;
          large: ImgSrcFormat;
          medium: ImgSrcFormat;
          small: ImgSrcFormat;
        };
        url: string;
      }>;
    };
  };
