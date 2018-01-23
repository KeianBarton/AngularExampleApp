import { Injectable } from "@angular/core";

// Suppress TS error that toastr variable is unknown
declare let toastr:any

@Injectable()
export class ToastrService {
    success(message:string, title?: string) {
        toastr.success(message,title)
    }
    info(message:string, title?: string) {
        toastr.success(message,title)
    }
    warning(message:string, title?: string) {
        toastr.success(message,title)
    }
    error(message:string, title?: string) {
        toastr.success(message,title)
    }
}