import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
       req = req.clone({
        setHeaders: {
            'x-rapidapi-key': '176b58cae6msha23818be583a6c6p161758jsn15e7bec79a9b',
            'x-rapid-api-host': 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams :{
            key: '17b424c8d27e45d89288a1e6d248b5cb'
        }
       });
       return next.handle(req);
    }
}