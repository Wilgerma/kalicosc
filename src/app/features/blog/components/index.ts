import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { BlogEditComponent } from "./blog-edit/blog-edit.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogComponent } from "./blog/blog.component";




export const components = [
  BlogListComponent,
  BlogEditComponent,
  BlogDetailComponent,
  BlogComponent
];


export * from './blog-list/blog-list.component';
export * from './blog-detail/blog-detail.component';
export * from './blog/blog.component';
export * from './blog-edit/blog-edit.component';
