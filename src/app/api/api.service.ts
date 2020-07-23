import { Injectable } from '@angular/core';
import { ApiModule } from './api.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: ApiModule
})
export class ApiService extends HttpClient {
}
