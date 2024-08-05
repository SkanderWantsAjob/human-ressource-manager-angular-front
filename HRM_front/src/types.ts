import { HttpContext, HttpEvent, HttpHeaders, HttpParams } from "@angular/common/http";
import { Interface } from "readline";
import { Observable } from "rxjs";

export interface Options { 
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Employee {
  id: number;
  fullName: string;
  email: string;
  password: string;
  designation: string;
  salary: number;
  department?: Department; // assuming Department is another interface or enum
  projects: Project[]; // assuming Project is another interface
  createdAt: Date;
  updatedAt: Date;
}


export enum Department {
  HR = 'HR',
  IT = 'IT',
  Finance = 'Finance'
}


export interface Project {
  id: number;
  name: string;
  description : string;
  headOfProject: Employee;
}


