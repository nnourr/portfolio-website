import { Component } from "@angular/core";
import { CurrPage } from "../../../enums/curr-page";

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog.page.html',
  })
  export class BlogPageComponent {
    currentPage = CurrPage.BlogPage
  }