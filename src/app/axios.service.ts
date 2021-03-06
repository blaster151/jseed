import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { Promise } from '../../node_modules/es6-promise';
// import { Injectable } from '@angular/core';

// @Injectable()
export class AxiosService {
  getUrlContents(url: string) {
    const result = new Promise<string>((res, rej) => {
      axios.get(url).then(rsp => {
          res(rsp.data);
      }, function(err) { rej(err); });
    });

    return result;
  }
}
