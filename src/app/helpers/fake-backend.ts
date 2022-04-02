import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';
import {User} from '../models/user';
import {Role} from '../models/role';


const users: User[] = [
    {userId: 1, email: 'admin@gmail.com', password: '123', role: Role.ADMIN},
    {userId: 2, email: 'abc@abc.com', password: '123', role: Role.STUDENT},
    {userId: 3, email: 'talent@talent.com', password: '123', role: Role.EX_STUDENT},
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const {url, method, headers, body} = request;

        // wrap in delayed observable to simulate server api call
      return next.handle(request)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize()) as Observable<HttpEvent<any>>;

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                // case url.endsWith('/users') && method === 'GET':
                //     return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }

        }

        // route functions

        function authenticate() {
            const {email, password} = body;
            const user = users.find(x => x.email === email && x.password === password);
            if (!user) {
                return error('email or password is incorrect');
            }
            return ok({
                userId: user.userId,
                email: user.email,
                role: user.role,
                token: `fake-jwt-token.${user.userId}`
            });
        }

        // function getUsers() {
        //     if (!isClient()) {
        //         return unauthorized();
        //     }
        //     return ok(users);
        // }

        function getUserById() {
            if (!isLoggedIn()) {
                return unauthorized();
            }

            // // only admins can access other user records
            // if (!isClient() && currentUser().userId !== idFromUrl()) {
            //     return unauthorized();
            // }

            const user = users.find(x => x.userId === idFromUrl());
            return ok(user);
        }

        // helper functions

        function ok(body: any) {
            return of(new HttpResponse({status: 200, body}));
        }

        function unauthorized() {
            return throwError({status: 401, error: {message: 'unauthorized'}});
        }

        function error(message: any) {
            return throwError({status: 400, error: {message}});
        }

        function isLoggedIn() {
            const authHeader = headers.get('Authorization') || '';
            return authHeader.startsWith('Bearer fake-jwt-token');
        }

        // function isClient() {
        //     return isLoggedIn() && currentUser().role === Role.Client;
        // }

        function currentUser() {
            if (!isLoggedIn()) {
                return;
            }
            const auth = headers.get('Authorization');
            const userId  = auth != null ? parseInt(auth.split('.')[1]): null;
            return users.find(x => x.userId === userId);
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
