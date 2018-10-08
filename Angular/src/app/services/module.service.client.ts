import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../../environments/environment';


@Injectable()

export class ModuleService {
  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}


  api = {
    'createModule' : this.createModule,
    'findModulesByCourse' : this.findModulesByCourse,
    'findModuleById' : this.findModuleById,
    'updateModule' : this.updateModule,
    'deleteModule' : this.deleteModule
  };

  createModule(courseId: string, module: any) {
    const url = this.baseUrl + '/api/course/' + courseId + '/module';

    return this.http.post(url, module).map((response: Response) => {
      return response.json();
    });
  }

  findModulesByCourse(courseId: string) {
    const url = this.baseUrl + '/api/course/' + courseId + '/module';

    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }


  findModuleById(moduleId: string) {
    const url = this.baseUrl + '/api/module/' + moduleId;

    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateModule(moduleId: string, module: any) {
    const url = this.baseUrl + '/api/module/' + moduleId;

    return this.http.put(url, module).map((response: Response) => {
      return response.json();
    });
  }

  deleteModule(moduleId: string) {
    const url = this.baseUrl + '/api/module/' + moduleId;

    return this.http.delete(url).map((response: Response) => {
      return null;
    });
  }



}
